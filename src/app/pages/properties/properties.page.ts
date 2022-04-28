import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/Services/storage.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.page.html',
  styleUrls: ['./properties.page.scss'],
})
export class PropertiesPage implements OnInit {

  partner_type = "";
  uid: any;
  category_id :any;
  properties_title = "";
  properties_details  = [{}];

  constructor(
    public route: ActivatedRoute,
    public api: ApiService,
    public authen: AuthService,
    private storageService: StorageService,
  ) { 
    this.route.queryParams.subscribe((params) =>{
      console.log(params);
      this.category_id = params['category_id'];
    })
  }

  ngOnInit() {
    this.selectPatner();
  }

 

//choix del'utilisateur
  selectPatner(){
    console.log(this.category_id);
    this.storageService.get('user-login').then((res) => {
      console.log('--------------', res);
      this.partner_type = res.partner_type;
      console.log("------------------propritaire", this.partner_type)
      if(res.partner_type === "landlord"){
        console.log("------------------propritaire");
        this.storageService.get('data_landlord').then((data) =>{
          if(this.category_id == data.categ_id){
            this.properties_details = data.properties;
             console.log(data);
          }
        });
      }else if(this.partner_type === "tenant"){
        console.log("--------------Locataire")
        // this.api.getLocalData1('data_tenant').subscribe((res) => {
        //   this.properties_details = res;
        // })
      }
    });
  }
  checkFacture(){
    console.log("check  a facture");
  }
}
