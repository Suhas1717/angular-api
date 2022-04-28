import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { UserModel } from '../user-registration/user.model';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  equalTo: (equalControl: AbstractControl) => ValidatorFn;
  userListForm!: FormGroup;
  userModel: UserModel;

  userList:any = '';
  constructor(private formBuild: FormBuilder, private userApi: UserApiService) { }

  ngOnInit(): void {
    this.userListForm = this.formBuild.group({
      id:[''],
      userName:['', [Validators.required, Validators.max(30), Validators.min(5)]],
      firstName:['',[Validators.required, Validators.max(30), Validators.min(5)]],
      lastName:[''],
      email: [''],

      // email: ['', Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
      phoneNumber:[''],
     // password:[''],

      
    })
    this.getUserList();
  }

  getUserList(){
    this.userApi.getUser().subscribe(res=>{
        this.userList = res;
    })
  }

  deleteUserRecord(id:number){
    this.userApi.deleteUser(id).subscribe(res=>{
        this.userList = res;
    })
  }

  

}
