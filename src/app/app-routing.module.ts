import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'tabNavigation',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
