import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  properties_details  = [];

  constructor(
    public activateRoute: ActivatedRoute,
    public router: Router,
    public api: ApiService,
    public authen: AuthService,
    private storageService: StorageService,
  ) { 
    this.category_id = this.router.getCurrentNavigation().extras.state.category_id;
    console.log('-----------cat_id',this.category_id)
  }

  ngOnInit() {
    this.selectPatner();
    console.log('-------------------properties',this.properties_details);
  }

 

//choix de la proprité
  selectPatner(){
    this.storageService.get('user-login').then((res) => {
      this.partner_type = res.partner_type;
      if(res.partner_type === "landlord"){
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
}
