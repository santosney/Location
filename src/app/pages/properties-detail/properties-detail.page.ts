import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/Services/api.service';
import { StorageService } from 'src/app/Services/storage.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-properties-detail',
  templateUrl: './properties-detail.page.html',
  styleUrls: ['./properties-detail.page.scss'],
})

export class PropertiesDetailPage implements OnInit {
  amountStatus: any;
  balanceStatus: any;
  espense: any;
  uid: any;
  id_cat: any;
  id_prop: any;
 
  more_properties = [{}];
  image_url: any;
  profil: any;

  constructor(
    public api: ApiService,
    public authen: AuthService,
    public activateService: ActivatedRoute,
    public route: Router,
    public storage: StorageService,
    private sanitizer: DomSanitizer,

  ) 
  { 
    this.id_cat = this.route.getCurrentNavigation().extras.state.categ_id;
    this.id_prop = this.route.getCurrentNavigation().extras.state.prop_id;
    console.log('------------cat_id', this.id_cat, '--------------prop_id', this.id_prop);
  }

  ngOnInit() {
    this.SelectPropertiesDetails();
    this.getProfil();
  }

  SelectPropertiesDetails(){
    this.storage.get('user-login').then((res) => {
      console.log('--------------user-id', res);
      this.image_url = res.image;
      console.log("------------------propritaire", res.partner_type)
      if(res.partner_type === "landlord"){
        console.log("------------------propritaire");
        this.storage.get('data-landlord').then((data) =>{
              this.more_properties = data;
              console.log('local-data',this.more_properties);
              this.more_properties.forEach((item) => {
                console.log(item);
              });
        });
      }else if(res.partner_type === "tenant"){
        console.log("--------------Locataire")
      }
    });
  }
  checkFacture(){
    console.log("check  a facture");
  }
  getStatus(amount: number){
    if(amount > 0  && amount == 0 ){
      this.amountStatus = true;
      console.log('----------- montant vrai');
    }else {
      this.amountStatus = false;
      console.log('---------Montant Faux');
    }
  }

  fetchStatus(amount: number){
    if(amount > 0 || amount == 0 ){
      this.balanceStatus = true;
      console.log('-----------balance vrai');
    }else {
      this.balanceStatus = false;
      console.log('--------- balance Fauce');
    }
  }

  fetchDepense(amount: number){
    if(amount > 0 || amount == 0 ){
      this.espense = true;
      console.log('-----------espense vrai');
    }else {
      this.espense = false;
      console.log('--------- espense Fauce');
    }
  }

  getProfil(){
    let profil = this.image_url;
    this.profil = 'data:image/jpg;base64,' + (this.sanitizer.bypassSecurityTrustResourceUrl(profil) as any).changingThisBreaksApplicationSecurity;
    console.log('------------this.logo   ',this.profil);
  }
}
