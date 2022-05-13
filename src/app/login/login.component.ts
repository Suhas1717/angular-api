import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../user-api.service'; 
import { AuthService } from '../services/auth.service';
import { Ilogin } from '../interfaces/ilogin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { error } from 'console';
//import data from '../../../../db.json';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  logObj: Ilogin = { userid: 'admin', password: 'admin'}

  loginForm : FormGroup;
  Data:any;
  message:string;
  isUrl:string;
  userData:any = '';
  err:boolean = false;

  constructor(private router:Router, private userApi:UserApiService, private formBuild: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuild.group({
      userid :['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.isUrl = '/dashboard';
    this.authService.logout();
  }

  get userIdValidation(){
    return this.loginForm.get('userid');
  }

  get passwordValidation(){
    return this.loginForm.get('password');
  }

  get form() {
    return this.loginForm.controls
  }

 ///////////////////////////////////
 ////////////// Login //////////////
 /////////////////////////////////// 
  login(): void{ 
    // this.authService.loginUser(this.userData)
    // .subscribe(
    //   res => console.log(res)
    // )
    
    if(this.loginForm.invalid){
      alert('Invalid username and password');
      console.log(this.userData)
      return;
    }else{
      if(this.form['userid'].value == this.logObj.userid && this.form['password'].value == this.logObj.password){
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('token', this.form['userid'].value);
        
        this.router.navigate(['/dashboard']);
        console.log('Logiin successful'+ " " + this.form['userid'].value + " " + this.form['password'].value);
     }   
  }
}

// // errMsg:string;
// // errorHandling(error:any){
// //   this.err = true;
// //   if(error.status === 0){ }
// //     else if(error.status === 401){
// //       this.errMsg = "Unauthorised User: Access denied due to invalid User Name Or Password";
// //    }else if(error.status === 404){
// //      this.errMsg = "User Not Found";
// //    }else if(error.status === 400){
// //      this.errMsg = "User Name Or Password Is Wrong"
// //    }else if(error.status == 403){
// //      this.errMsg = "You Dont Have Required Privileges To Perform This Operation";
// //    }else{
// //      this.errMsg = "Something Went! , Wrong Try Again";
// //    }
// }
  createNew(){
    this.router.navigate(['registration']);
  }

}
