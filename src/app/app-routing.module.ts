import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path:'dashboard', component : DashboardComponent },
  { path: 'userList', component: UsersListComponent},
  { path: 'registration', component: UserRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo:'', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
