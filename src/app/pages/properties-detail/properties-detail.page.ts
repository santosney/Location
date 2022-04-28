import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-properties-detail',
  templateUrl: './properties-detail.page.html',
  styleUrls: ['./properties-detail.page.scss'],
})

export class PropertiesDetailPage implements OnInit {
  uid: any;
  id: any;
 
  more_properties : [any];

  constructor(
    public api: ApiService,
    public authen: AuthService,
    public route: ActivatedRoute,
  ) 
  { 
    this.id = this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.SelectPropertiesDetails();
  }

  SelectPropertiesDetails(){
    this.api.getLocalData1('Data').subscribe((res) => {
    if(this.id === res.properties.id){
      this.more_properties = res.properties.lease_detail;
    }
    
    });
  }
  checkFacture(){
    console.log("check  a facture");
  }
}
