import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.page.html',
  styleUrls: ['./choose.page.scss'],
})
export class ChoosePage implements OnInit {

  constructor(
    public route: Router
  ) { }

  ngOnInit() {
  }
  selectChoose(id: any){
    this.route.navigate(['login'], {state: {parthner_type: id}});
  }
}
