import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class IonLoaderService{

    constructor(
        public loadController: LoadingController,
        public router: Router,
    ){}

   SimpleLoader(isLoading: boolean){
        if(!isLoading == true){
            this.loadController.create({
                message: "Chargement des data...",
                duration: 6000,
            }).then((res) =>{
                res.present();
                this.router.navigate(['home']);
            });
        }
    }
}