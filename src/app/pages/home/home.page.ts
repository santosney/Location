import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/Services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  data_landlord: any;
  uid: any;
  categories = [{}];

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(
    public api: ApiService,
    public authen: AuthService,
    public route: Router,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
     this.selectCategory();
  }

  selectCategory(){
      this.storageService.get('user-login').then((res: any) => {
        this.uid = res.id;
      });
      this.storageService.get('data-landlord').then((data: any) => {
        this.categories = data;
      });
  }

  checkProperties(id: any){
    console.log(id);
    this.route.navigate(['properties'], {state: {category_id: id}});
  }
  logout(){
    this.storageService.get('user-login').then((data) => {
      if(data.partner_type == 'landlord'){
        this.storageService.removeStorageItem('data-landlord').then();
        this.route.navigate(['']);
      }else{
        this.storageService.removeStorageItem('data-tenant')
        this.route.navigate(['']);
      }
    });
    this.storageService.removeStorageItem('user-login').then();
  }

}
