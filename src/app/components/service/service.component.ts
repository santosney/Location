import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  service_title = ["IMMEULE", "MAISON","VILLA", "TERRAIN"]
  constructor() { }

  ngOnInit() {}

  checkFacture(){
    console.log("check  a facture");
  }
}
