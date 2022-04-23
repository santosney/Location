import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.page.html',
  styleUrls: ['./properties.page.scss'],
})
export class PropertiesPage implements OnInit {
  subServices = ['immeuble', 'maison', 'villa', 'terrain'];
  constructor() { }

  ngOnInit() {
  }
  checkService(){
    console.log("service choisir");
  }
}
