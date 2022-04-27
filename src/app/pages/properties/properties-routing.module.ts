import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertiesPage } from './properties.page';

const routes: Routes = [
  {
    path: '',
    component: PropertiesPage,
  },
  {
    path: 'properties-detail/:id',
    loadChildren: () => import('../../pages/properties-detail/properties-detail.module').then( m => m.PropertiesDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertiesPageRoutingModule {}
