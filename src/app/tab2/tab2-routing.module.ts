import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { ServiceComponent } from '../components/service/service.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'Services',
    component: ServiceComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
