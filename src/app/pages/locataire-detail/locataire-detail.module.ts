import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocataireDetailPageRoutingModule } from './locataire-detail-routing.module';

import { LocataireDetailPage } from './locataire-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocataireDetailPageRoutingModule
  ],
  declarations: [LocataireDetailPage]
})
export class LocataireDetailPageModule {}
