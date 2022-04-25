import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.page.html',
  styleUrls: ['./properties.page.scss'],
})
export class PropertiesPage implements OnInit {
  properties_title = "IMMEULE";
  properties_details = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  constructor() { }

  ngOnInit() {
  }
  checkFacture(){
    console.log("check  a facture");
  }
}
