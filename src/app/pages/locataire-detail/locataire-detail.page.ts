import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/Services/storage.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-locataire-detail',
  templateUrl: './locataire-detail.page.html',
  styleUrls: ['./locataire-detail.page.scss'],
})
export class LocataireDetailPage implements OnInit {
  amountStatus = false;
   id : any;
  properties_user: any;
  balanceStatus = false;
  profil: any;
  image_url: any;
   
  constructor(
    public activateRoute: ActivatedRoute,
    public router: Router,
    public api: ApiService,
    public authen: AuthService,
    private storageService: StorageService,
    private sanitizer: DomSanitizer,

  ) { 
    this.id = router.getCurrentNavigation().extras.state.lease_id;
  }

  ngOnInit() {
    this.selectPatner();
    this.getImage();
  }

  selectPatner(){
    this.storageService.get('user-login').then((res) => {
      if(res.partner_type === "landlord"){
        this.storageService.get('data-landlord').then((data) =>{
  
        });
      }else if(res.partner_type === "tenant"){
        this.image_url = res.image;
        this.storageService.get('data-tenant').then((data) =>{
          this.properties_user = data;
          console.log(this.properties_user);
    });
      }
    });
  }

  getStatus(amount: number){
    if(amount > 0) {
      this.amountStatus = true;
      console.log('---------------vrai', amount);
    }else {
      this.amountStatus = false;
      console.log('------------------faux', amount);
    }
  }

  fetchStatus(amount: number){
    if(amount > 0){
      this.balanceStatus = true;
      console.log('-----------vrai');
    }else {
      this.balanceStatus = false;
      console.log('---------Faux');
    }
  }

  getImage(){
    let item = this.image_url;
    this.profil = 'data:image/jpg;base64,' + (this.sanitizer.bypassSecurityTrustResourceUrl(item) as any).changingThisBreaksApplicationSecurity;
    console.log('------------this.logo   ', item, this.profil);
  }
}
