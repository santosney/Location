import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/Services/storage.service';

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
   
  constructor(
    public activateRoute: ActivatedRoute,
    public router: Router,
    public api: ApiService,
    public authen: AuthService,
    private storageService: StorageService,
  ) { 
    this.id = router.getCurrentNavigation().extras.state.lease_id;
  }

  ngOnInit() {
    this.selectPatner();
  }

  selectPatner(){
    this.storageService.get('user-login').then((res) => {
      if(res.partner_type === "landlord"){
        this.storageService.get('data-landlord').then((data) =>{
  
        });
      }else if(res.partner_type === "tenant"){
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
}
