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
  uid: any;
  category_id :any;

  properties_details = [{}];

  constructor(
    public route: ActivatedRoute,
    public apiService: ApiService,
    public authentification: AuthService,
  ) { 
    this.route.queryParams.subscribe((params) =>{
      this.category_id = params['categ_id'];
    })
  }

  ngOnInit() {
    this.selectProperties();
  }

  selectProperties(){
    this.authentification.getUser().then((res) =>{
      this.uid = res['id'];
      this.apiService.getAllData(this.uid).subscribe((data: any) => {
          if(this.category_id === data.categ_id){
            this.properties_details = data.properties;
          }
      })
    })
  }
  checkFacture(){
    console.log("check  a facture");
  }
}
