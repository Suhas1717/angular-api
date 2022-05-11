import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaderResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import { AuthGuard } from './guards/auth.guard';
import { HeadersInterceptor } from './interceptors/headers.interceptor';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuestionFilterPipe } from './filters/question-filter.pipe';
import { DateTimePipe } from './pipes/date-time.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    UserRegistrationComponent,
    LoginComponent,
    UsersListComponent,
    QuestionFilterPipe,
    DateTimePipe,
    //HashLocationStrategy RouterModule.forRoot(route, {useHash:true})
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [
    AuthGuard,
    {provide:HTTP_INTERCEPTORS, useClass:HeadersInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:ResponseInterceptor, multi:true},
    //{provide:LocationStrategy, useClass:PathLocationStrategy}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
