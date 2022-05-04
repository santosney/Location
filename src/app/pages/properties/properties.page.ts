import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/Services/storage.service';
import { Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-properties',
  templateUrl: './properties.page.html',
  styleUrls: ['./properties.page.scss'],
})

export class PropertiesPage implements OnInit {
  logo : any;
  partner_type = "";
  uid: any;
  category_id :any;
  properties_title = "";
  properties_details  = [];
  walpperContent: Uint8Array[];
  image_url: any;
  profil: any;

  constructor(
    public activateRoute: ActivatedRoute,
    public router: Router,
    public api: ApiService,
    public authen: AuthService,
    private storageService: StorageService,
    private sanitizer: DomSanitizer,
  ) { 
    this.category_id = this.router.getCurrentNavigation().extras.state.category_id;
    console.log('-----------cat_id',this.category_id)
  }

  ngOnInit() {
    this.selectPatner();
    this.getProfil();
  }

 

//choix de la proprité
  selectPatner(){
    this.storageService.get('user-login').then((res) => {
      this.partner_type = res.partner_type;
      if(res.partner_type === "landlord"){
        this.image_url = res.image;
        this.storageService.get('data-landlord').then((data) =>{
              this.properties_details = data;
        });
      }else if(this.partner_type === "tenant"){
        this.storageService.get('data-tenant').then((data) =>{
          this.properties_details = data;
    });
      }
    });
  }
  checkDetail(id_cat:any, id_prop: any){
    console.log(id_cat, id_prop);
   return this.router.navigate(['properties-detail'], {state :{categ_id: id_cat, prop_id: id_prop}});
  }

  getImage(image: any){
    this.logo = 'data:image/jpg;base64,' + (this.sanitizer.bypassSecurityTrustResourceUrl(image) as any).changingThisBreaksApplicationSecurity;
    console.log('------------this.logo   ',this.logo);
  }
  getProfil(){
    let profil = this.image_url;
    this.profil = 'data:image/jpg;base64,' + (this.sanitizer.bypassSecurityTrustResourceUrl(profil) as any).changingThisBreaksApplicationSecurity;
    console.log('------------this.logo   ',this.profil);
  }
}
