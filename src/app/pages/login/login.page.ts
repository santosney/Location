import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { ConnectionStatus, NetworkService } from 'src/app/Services/network.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoanding: boolean = false;
  uid: any;
  data_user = {
    email: '',
    password: '',
    partner_type: '',
  };

  constructor(
    public Auth: AuthService,
    public storage: StorageService,
    public networkService: NetworkService,
    public router: Router,
    public toastService: ToastService,
    public apiService: ApiService,
    ) { }

  ngOnInit() {
  }

  validateInputs() {
    let email = this.data_user.email.trim();
    let password = this.data_user.password.trim();
    return (
        this.data_user.email &&
        this.data_user.password &&
        email.length > 0 &&
        password.length > 0
        );
    }

  partner_type_tenant(){
    this.data_user.partner_type = "tenant";
  }

  partner_type_landlord(){
    this.data_user.partner_type = "landlord";
  }

  Login(form: NgForm){
    this.isLoanding = true;

    this.data_user = form.value;

    // network disconnected
      if(this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline){
        if(this.validateInputs()){
          this.Auth.getUser().then((user) => {
            if (this.data_user.email === user.email && this.data_user.password === user.password) {
              this.storage.store("user",user.user).then();
                this.router.navigate(['home']);
              window.location.reload();
            }else {
              this.toastService.presentToast(user.message);
              return;
            }
          });
        } else{
          this.toastService.presentToast("Email ou mot de passe incorrecte !!");
        }
      }

    // network connected
    if(this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Online){
        if(this.validateInputs()){
          this.Auth.login(this.data_user).subscribe((res) => {
            console.log("Http Responde:", res);
            if(res){ 
              this.uid = this.storage.get('user');
              const user = {'id': this.uid, 'email': this.data_user.email.trim(), 'password': this.data_user.password.trim()};
              
              this.storage.store('user-login', user).then();
            }
          });
        } else{
          this.toastService.presentToast("Email ou mot de passe incorrecte !!");
        }
      }
  }
}
