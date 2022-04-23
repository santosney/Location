import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WellcomPageRoutingModule } from './wellcom-routing.module';

import { WellcomPage } from './wellcom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WellcomPageRoutingModule
  ],
  declarations: [WellcomPage]
})
export class WellcomPageModule {}
