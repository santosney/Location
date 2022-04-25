import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wellcom',
  templateUrl: './wellcom.page.html',
  styleUrls: ['./wellcom.page.scss'],
})
export class WellcomPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor() { }

  ngOnInit() {
  }

}
