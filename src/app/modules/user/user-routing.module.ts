import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'all', component: UserListComponent },
  { path: 'view', component: UserViewComponent },
  { path: 'profile', component:UserProfileComponent},
  { path: 'create', component:CreateUserComponent},
  { path: 'update', component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
