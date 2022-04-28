import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { AuthService } from 'src/app/services/auth.service';

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
  properties_details : [any];

  constructor(
    public route: ActivatedRoute,
    public api: ApiService,
    public authen: AuthService,
  ) { 
    this.route.queryParams.subscribe((params) =>{
      this.category_id = params['categ_id'];
    })
  }

  ngOnInit() {
    this.selectPatner();
    this.selectProperties();
  }

  selectProperties(){
    if(this.partner_type === "landbord"){
      this.api.getLocalData1('Data').subscribe((res) =>{
        if(this.category_id === res.category_id){
          this.properties_title = res.category;
          this.properties_details = res.properties;
        }
      });
    }else if(this.partner_type === "tenant"){
      this.api.getLocalData1('data_tenant').subscribe((res) => {
        this.properties_details = res;
      })
    }
  }

//choix del'utilisateur
  selectPatner(){
    this.authen.getUser().then((res) => {
      this.partner_type =res.partner_type;
    });
  }
  checkFacture(){
    console.log("check  a facture");
  }
}
