import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonLoaderService {

  isLoading = false;

  constructor(public loadingController: LoadingController) { }



  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      // duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }




// Simple loader
simpleLoader() {
  this.loadingController.create({
    message: 'Loading...'
  }).then((response) => {
    response.present();
  });
}

// Dismiss loader
dismissLoader() {
  this.loadingController.dismiss().then((response) => {
    console.log('Loader closed!', response);
  }).catch((err) => {
    console.log('Error occured : ', err);
  });
}

// Auto hide show loader
autoLoader() {
  this.loadingController.create({
    message: 'Patientez svp...',
    duration: 4000
  }).then((response) => {
    response.present();
    response.onDidDismiss().then((response) => {
      console.log('Loader dismissed', response);
    });
  });
}   

// Custom style + hide on tap loader
customLoader() {
  this.loadingController.create({
    message: 'Loader with custom style',
    duration: 4000,
    cssClass:'loader-css-class',
    backdropDismiss:true
  }).then((res) => {
    res.present();
  });
}   



}
