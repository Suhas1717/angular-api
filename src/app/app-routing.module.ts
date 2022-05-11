import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: UserRegistrationComponent },
  { path:'dashboard', component : DashboardComponent, canActivate:[AuthGuard]},
  { path: 'userList', component:UsersListComponent, canActivate:[AuthGuard]},
  { path: '', redirectTo:'login', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
