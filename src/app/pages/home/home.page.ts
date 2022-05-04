import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/Services/storage.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  data_landlord: any;
  uid: any;
  categories = [{}];
  image_url: any;
  profil: any;
  constructor(
    public api: ApiService,
    public authen: AuthService,
    public route: Router,
    private storageService: StorageService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
     this.selectCategory();
     this.getProfil();
  }

  selectCategory(){
      this.storageService.get('user-login').then((res: any) => {
        this.uid = res.id;
        this.image_url = res.image;
        console.log('---------------image_url',this.image_url);
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
  getProfil(){
    let profil = this.image_url;
    this.profil = 'data:image/jpg;base64,' + (this.sanitizer.bypassSecurityTrustResourceUrl(profil) as any).changingThisBreaksApplicationSecurity;
    console.log('------------this.logo   ',this.profil);
  }

}
