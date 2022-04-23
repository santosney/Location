import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertiesDetailPageRoutingModule } from './properties-detail-routing.module';

import { PropertiesDetailPage } from './properties-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertiesDetailPageRoutingModule
  ],
  declarations: [PropertiesDetailPage]
})
export class PropertiesDetailPageModule {}
