import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(
    public Route: Router,
  ) { }

  ngOnInit() {}

  Submit(){
    this.Route.navigate([""]);
    console.log("########### recu 100% ##########");
  }
}
