import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { MasterTemplateComponent } from './modules/template/Layout/master-template/master-template.component';
import { LogoutComponent } from './modules/logout/logout.component';

const routes: Routes = [
  { path: '', component: LoginComponent}, 
  { path: 'logout', component: LogoutComponent}, 
  { path: 'dashboard', 
    component:MasterTemplateComponent,
    children: [{
      path: '',
      component: HomeComponent
    }]
  },
  {
    path: 'user',
    component:MasterTemplateComponent,
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
  }, 
  {
    path: 'card',
    component:MasterTemplateComponent,
    loadChildren: () => import('./modules/card/card.module').then(m => m.CardModule),
  }, 
  { path: '**', component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
