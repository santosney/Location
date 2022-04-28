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
    public api: ApiService,
    public authen: AuthService,
  ) { }

  ngOnInit() {
     
  }

  selectCategory(){
      this.authen.getUser().then((res: any) => {
        this.uid = res.id;
      });
      this.api.getLocalData1('data').subscribe((data) => {
        this.category.push(data.category);
      })

      this.category = this.data_landlord.category;
  }

  checkService(){
    console.log("service choisir");
  }

}
