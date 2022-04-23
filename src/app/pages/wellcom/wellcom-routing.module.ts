import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WellcomPage } from './wellcom.page';

const routes: Routes = [
  {
    path: '',
    component: WellcomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WellcomPageRoutingModule {}
