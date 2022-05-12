import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  // {
  //   path: 'tabNavigation',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
 
  {
    path: 'welcom',
    loadChildren: () => import('./pages/wellcom/wellcom.module').then( m => m.WellcomPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    // canLoad: [AuthGuard]
  },
  {
    path: 'properties',
    loadChildren: () => import('./pages/properties/properties.module').then( m => m.PropertiesPageModule),
    // canLoad: [AuthGuard]
  },
  {
    path: 'properties-detail',
    loadChildren: () => import('./pages/properties-detail/properties-detail.module').then(m =>m.PropertiesDetailPageModule),
    // canLoad: [AuthGuard]
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
    path: 'locataire',
    loadChildren: () => import('./pages/locataire/locataire.module').then( m => m.LocatairePageModule),
    // canLoad: [AuthGuard]
  },
  {
    path: 'locataire-detail',
    loadChildren: () => import('./pages/locataire-detail/locataire-detail.module').then( m => m.LocataireDetailPageModule),
    // canLoad: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./pages/choose/choose.module').then( m => m.ChoosePageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
