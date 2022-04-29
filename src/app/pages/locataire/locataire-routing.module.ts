import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocatairePage } from './locataire.page';

const routes: Routes = [
  {
    path: '',
    component: LocatairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocatairePageRoutingModule {}
