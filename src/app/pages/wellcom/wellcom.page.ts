import { Component, OnInit, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-wellcom',
  templateUrl: './wellcom.page.html',
  styleUrls: ['./wellcom.page.scss'],
})
export class WellcomPage implements OnInit {
  @ViewChild(Slides) slides: Slides;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  slideChange(){
    let me = this;
    // me.slides.isEnd().then((isTrue) => {
    //   console.log(isTrue);
    //   if(isTrue){
    //     this.router.navigate(['login']);
    //   }
    // })
    if (this.slides.isEnd()) {
      this.router.navigate(['login']);
    }
  }

}
