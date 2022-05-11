import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { UserModel } from './user.model';
import { UserApiService } from '../user-api.service';
import { first, max } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userForm!: FormGroup;
  userModel: UserModel = new UserModel();
  num:number = 1;
  data:any = '';

  constructor(private formBuild: FormBuilder, private userApi:UserApiService, private route: Router) { 
   
  }

  ngOnInit(): void {

/////////////////////////////////////
//////////////user model/////////////
/////////////////////////////////////  
   this.userForm = this.formBuild.group({
       id:[''],
      userName:['', [Validators.required, Validators.min(6), Validators.max(20)]],
      firstName:['', [Validators.required, Validators.min(2), Validators.max(50)]],
      lastName:['', [Validators.required, Validators.min(2), Validators.max(50)]],
      email: ['', [Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])]],

      // email: ['', Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
      phoneNumber:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password:['', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]],
      c_pass:['', [Validators.required]]
    }) 
    }

////////////////////////////////////////
/////////////// validation /////////////
////////////////////////////////////////

    get firstNameValidation(){
      return this.userForm.get('firstName');
    }
    get lastNameValidation(){
        return this.userForm.get('lastName');
    }
    get userNameValidation(){
      return this.userForm.get('userName');
    }
    get emailValidation(){
      return this.userForm.get('email');
    }
    get phoneNumberValidation(){
      return this.userForm.get('phoneNumber');
    }
    get passwordValidation(){
      return this.userForm.get('password');
}

//////////////////////////////////
////////// Post user data ////////
//////////////////////////////////

    postUserData(){
      //this.userModel.id = this.userForm.value.id;
      this.userModel.firstName = this.userForm.value.firstName;
      this.userModel.lastName = this.userForm.value.lastName;
      this.userModel.userName = this.userForm.value.userName;
      this.userModel.email = this.userForm.value.email;
      this.userModel.phoneNumber = this.userForm.value.phoneNumber;
      this.userModel.password = this.userForm.value.password;

//////////////////////////////////////////////////////
////////// error handling and validation check //////
/////////////////////////////////////////////////////

      if(this.userForm.invalid){
            alert('Invalid input');
          }else if(this.userForm.value.password !== this.userForm.value.c_pass){
            alert('Password Mismatch');
          }else{
            this.userApi.postUser(this.userModel)
            .subscribe(res=>{
              alert("Registration successful");
              this.userForm.reset();
          })
        }
      }
}

