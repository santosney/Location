import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data_user = {
    email: '',
    password: '',
  }
  constructor(public Route: Router) { }

  ngOnInit() {
  }
  
  Login(form: NgForm){
    const data_user = form.value;
    console.log(data_user);
    this.Route.navigate(['home']);
  }
}
