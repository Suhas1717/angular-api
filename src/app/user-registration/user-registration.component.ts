import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from './user.model';
import { UserApiService } from '../user-api.service';
import { first } from 'rxjs';

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
  constructor(private formBuild: FormBuilder, private userApi:UserApiService) { }

  ngOnInit(): void {
     ///////user model/////////////
     this.userForm = this.formBuild.group({
      id:[''],
      userName:[''],
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', Validators.required],
      phoneNumber:['', Validators.required],
      password:['', Validators.required],
    }) 

    }


    ////////////////////////
    ////// validation //////
    ///////////////////////
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

      console.log(this.userModel.userName)

      this.userApi.postUser(this.userModel)
      .subscribe(res=>{
         console.log();
         alert("User Saved")
      })
    }

    
    
}

