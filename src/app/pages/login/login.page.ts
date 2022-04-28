import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ConnectionStatus, NetworkService } from 'src/app/Services/network.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { ApiService } from 'src/app/Services/api.service';
import { IonLoaderService } from 'src/app/Services/ion-loader';

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
    public network: NetworkService,
    public route: Router,
    public toast: ToastService,
    public api: ApiService,
    public loader: IonLoaderService,
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

  LoginUser(form: NgForm){
   

    this.data_user = form.value;

    // network disconnected
      if(this.network.getCurrentNetworkStatus() === ConnectionStatus.Offline){
        if(this.validateInputs()){
          this.Auth.getUser().then((user) => {
            if (this.data_user.email === user.email && this.data_user.password === user.password) {
              this.isLoanding = true;
              // this.storage.store("user",user.user).then();
              this.route.navigate(['home']);
              // window.location.reload();
            }else {
              this.toast.presentToast("Email ou mot de passe incorrecte !!");
              return;
            }
          });
        } else{
          this.toast.presentToast("Veillez entrer un email et un mot de passe valide !");
        }
      }

    // network connected
    if(this.network.getCurrentNetworkStatus() === ConnectionStatus.Online){
        if(this.validateInputs()){
          this.Auth.login(this.data_user).subscribe((res: any) => {
            console.log("Http Response:", res['data']);
            if(res){ 
              this.Auth.getUser().then((user: any) => {
                if(this.data_user.email === user.email && this.data_user.password === user.password){
                  this.loader.SimpleLoader(this.isLoanding)
                  if(user.partner_type === "landlord"){
                    this.route.navigate['home'];
                    window.location.reload();
                  }else if(user.partner_type === "tenant"){
                    this.route.navigate['properties'];
                    window.location.reload();
                  }
                }
                else {
                  this.toast.presentToast("email ou mot de passe incorrecte !!");
                  return;
                }
              })
            }else{
              this.toast.presentToast("Erreur serveur!");
            }
          });
        } else{
          this.toast.presentToast("Veillez entrer un email et un mot de passe valide");
        }
      } else {
        this.toast.presentToast("Vous etes hors connexion !");
      }
  }
}
