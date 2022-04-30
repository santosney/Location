import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/Services/storage.service';

@Component({
  selector: 'app-locataire',
  templateUrl: './locataire.page.html',
  styleUrls: ['./locataire.page.scss'],
})
export class LocatairePage implements OnInit {
  properties_user  = [];
  constructor(
    public activateRoute: ActivatedRoute,
    public router: Router,
    public api: ApiService,
    public authen: AuthService,
    private storageService: StorageService,
  ) { }

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

  checkId(id: any){
    this.router.navigate(['locataire-detail'], {state: {lease_id: id}});
  }

  logout(){
    this.storageService.get('user-login').then((data) => {
      if(data.partner_type == 'landlord'){
        this.storageService.removeStorageItem('data-landlord').then();
        this.router.navigate(['']);
      }else{
        this.storageService.removeStorageItem('data-tenant')
        this.router.navigate(['']);
      }
    });
    this.storageService.removeStorageItem('user-login').then();
  }
}