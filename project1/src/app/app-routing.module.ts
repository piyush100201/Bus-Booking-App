import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewUsersComponent } from './admin-view-users/admin-view-users.component';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users/addUser',component:UserregistrationComponent},
  {path:'users/profile',component:UserprofileComponent},
  {path:'users/home',component:UserhomeComponent},
  {path:'admin/allUsers',component:AdminViewUsersComponent},
  {path:'view-profile',component:ViewProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
