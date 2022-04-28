import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../user-api.service'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userName:string;
  password:string;
  userData = '';
  constructor(private router:Router, private userApi:UserApiService) { }

  ngOnInit(): void {
  }

  login():void{   

    if(this.userName == 'admin' && this.password == 'admin'){
      console.log(this.userName, this.password);
      this.router.navigate(['dashboard']);
    }
    else{
      alert('Invalid Password');
    }
  }

  createNewUser(){
    this.router.navigate(['registration']);
  }

}
