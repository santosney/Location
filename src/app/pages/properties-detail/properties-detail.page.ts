import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/Services/api.service';
import { StorageService } from 'src/app/Services/storage.service';

@Component({
  selector: 'app-properties-detail',
  templateUrl: './properties-detail.page.html',
  styleUrls: ['./properties-detail.page.scss'],
})

export class PropertiesDetailPage implements OnInit {
  uid: any;
  id_cat: any;
  id_prop: any;
 
  more_properties = [{}];

  constructor(
    public api: ApiService,
    public authen: AuthService,
    public activateService: ActivatedRoute,
    public route: Router,
    public storage: StorageService,
  ) 
  { 
    this.id_cat = this.route.getCurrentNavigation().extras.state.categ_id;
    this.id_prop = this.route.getCurrentNavigation().extras.state.prop_id;
    console.log('------------cat_id', this.id_cat, '--------------prop_id', this.id_prop);
  }

  ngOnInit() {
    this.SelectPropertiesDetails();
  }

  SelectPropertiesDetails(){
    this.storage.get('user-login').then((res) => {
      console.log('--------------user-id', res);
      // this.id_cat = res.partner_type;
      console.log("------------------propritaire", res.partner_type)
      if(res.partner_type === "landlord"){
        console.log("------------------propritaire");
        this.storage.get('data-landlord').then((data) =>{
              this.more_properties = data;
              console.log('local-data',this.more_properties);
        });
      }else if(res.partner_type === "tenant"){
        console.log("--------------Locataire")
      }
    });
  }
  checkFacture(){
    console.log("check  a facture");
  }
}
