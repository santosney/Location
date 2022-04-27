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
 
  more_properties = {};

  constructor(
    public apiService: ApiService,
    public authentificationService: AuthService,
    public router: ActivatedRoute,
  ) 
  { 
    this.id = this.router.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
  }

  SelectPropertiesDetails(){
    this.authentificationService.getUser().then((res) => {
    this.uid = res['id'];
    this.apiService.getAllData(this.uid).subscribe((data: any) => {
      if (this.id === data.properties.id){
        this.more_properties = data.properties.lease_detail;
      }
    });
    });
  }
  checkFacture(){
    console.log("check  a facture");
  }
}
