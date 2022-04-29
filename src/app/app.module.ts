import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import  { Network } from '@ionic-native/network/ngx';


@NgModule({
  declarations: [
    AppComponent,  
  ],
  entryComponents: [],

  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],

  providers: [
    Network,
    {
       provide: RouteReuseStrategy, 
       useClass: IonicRouteStrategy ,
       
    }
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
