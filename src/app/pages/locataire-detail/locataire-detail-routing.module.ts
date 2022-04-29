import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocataireDetailPage } from './locataire-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LocataireDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocataireDetailPageRoutingModule {}
