import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'tabNavigation',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
 
  {
    path: '',
    loadChildren: () => import('./pages/wellcom/wellcom.module').then( m => m.WellcomPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'properties',
    loadChildren: () => import('./pages/properties/properties.module').then( m => m.PropertiesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
