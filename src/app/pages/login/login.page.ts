import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ConnectionStatus, NetworkService } from 'src/app/Services/network.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { ApiService } from 'src/app/Services/api.service';
import { IonLoaderService } from 'src/app/Services/ion-loader';
import { StorageService } from 'src/app/Services/storage.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  parthnerUrl = ['api/get/landlord_info', 'api/get/tenant_info'];
  isLoanding: boolean = false;
  uid: any;
  type_user: any;
  data_user = {
    email: '',
    password: '',
    partner_type: '',
  };

  public form = [
    { val: 'Locataire', isChecked: true },
    { val: 'Propriétaire', isChecked: false },
  ];

  constructor(
    public Auth: AuthService,
    public network: NetworkService,
    public route: Router,
    public toast: ToastService,
    public api: ApiService,
    public loader: LoadingController,
    private storageService: StorageService,
    public loadinf : LoadingController,
    ) {

      this.type_user = this.route.getCurrentNavigation().extras.state.parthner_type;
     }

  ngOnInit() {
    console.log(this.data_user.partner_type);
  }

  async presentLoading() {
    const loading = await this.loader.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 1000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
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


  LoginUser(form: NgForm){

    this.data_user = form.value;
    this.data_user.partner_type = this.type_user;

    // network connected
    if(this.network.getCurrentNetworkStatus() === ConnectionStatus.Online){
        if(this.validateInputs()){
          this.presentLoading().then();
          this.Auth.login(this.data_user).subscribe((data) => {
            console.log('-----------debut', data);
            if(data.result.status === 200){
              this.toast.presentToast(data.result.message);
              const user = {'id': data.result.user, 'email': this.data_user.email, 'password': this.data_user.password, 'partner_type': this.data_user.partner_type, 'image': data.result.image};
              this.storageService.store('user-login', user).then();
              console.log('--------------parthner',this.data_user.partner_type);
              if(this.data_user.partner_type === "landlord"){
                console.log('--------------parthner',this.data_user.partner_type);
                this.api.getAllData(user.id, this.parthnerUrl[0]).subscribe((res) => {
                  console.log('---------user', user);
                  console.log('---------data', res['result'].data);
                    this.storageService.store('data-landlord',  res['result'].data);
                    this.route.navigate(["home"]);
                });
              }else {
                 this.api.getAllData(user.id, this.parthnerUrl[1]).subscribe((res) => {
                   this.storageService.store('data-tenant', res['result'].data);
                   this.route.navigate(['locataire']);
                 });
              }
            }else {this.toast.presentToast(data.result.message); }
          });
        } else{
          this.toast.presentToast("Veillez entrer un email et un mot de passe valide!");
        }
      } else {
        console.log('----------------no internet');
        this.toast.presentToast("Vous etes hors connexion !");
      }    
  }
}
