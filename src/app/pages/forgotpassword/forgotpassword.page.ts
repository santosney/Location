import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
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
