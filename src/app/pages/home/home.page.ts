import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  data_landlord: any;
  uid: any;
  category = [];

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(
    public apiService: ApiService,
    public authentificationService: AuthService,
  ) { }

  ngOnInit() {
     
  }

  selectCategory(){
      this.authentificationService.getUser().then((res) => {
        this.uid = res['id'];
      });
      this.apiService.getAllData(this.uid).subscribe((data) => {
        this.data_landlord = data;
      });

      this.category = this.data_landlord.category;
  }

  checkService(){
    console.log("service choisir");
  }

}
