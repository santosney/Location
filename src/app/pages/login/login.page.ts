import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoanding: boolean = false;
  data_user = {
    email: '',
    password: '',
    partner_type: '',
  };

  constructor(
    public Auth: AuthService,
    ) { }

  ngOnInit() {
  }
  partner_type_tenant(){
    this.data_user.partner_type = "tenant";
  }
  
  partner_type_landlord(){
    this.data_user.partner_type = "landlord";
  }

  Login(form: NgForm){
    this.data_user = form.value;
    console.log(this.data_user);
    this.isLoanding = true;
    this.Auth.login(this.data_user);
  }

}
