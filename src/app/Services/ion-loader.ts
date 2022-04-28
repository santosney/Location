import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class IonLoaderService{

    constructor(
        public loadController: LoadingController,
    ){}

   SimpleLoader(isLoading: boolean){
        isLoading = true;
        if(!isLoading){
            this.loadController.create({
                message: "Chargement des data...",
                duration: 6000,
            }).then((res) =>{
                res.present();
            });
        }
    }
}