import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-detail',
  templateUrl: './properties-detail.page.html',
  styleUrls: ['./properties-detail.page.scss'],
})
export class PropertiesDetailPage implements OnInit {
  peoperties_name= ["IMMEULE_LV1", "IMMEULE_LV2","IMMEULE_LV3", "IMMEULE_LV3"];
  more_properties = [{}, {}, {}, {}, {}, {}, {}, {}]
  constructor() { }

  ngOnInit() {
  }
  checkFacture(){
    console.log("check  a facture");
  }
}
