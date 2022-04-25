import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  data_user = {
    email: '',
    password: '',
  };
  constructor() { }

  ngOnInit() {
  }

  Reset(form: NgForm){
    console.log(form.value)
  }

}
