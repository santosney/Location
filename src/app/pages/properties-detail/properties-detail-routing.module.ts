import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertiesDetailPage } from './properties-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PropertiesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertiesDetailPageRoutingModule {}
