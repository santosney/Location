import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-detail',
  templateUrl: './properties-detail.page.html',
  styleUrls: ['./properties-detail.page.scss'],
})
export class PropertiesDetailPage implements OnInit {
  service_title = ["IMMEULE", "MAISON","VILLA", "TERRAIN"];
  constructor() { }

  ngOnInit() {
  }
  checkFacture(){
    console.log("check  a facture");
  }
}
