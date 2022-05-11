import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { UserModel } from '../user-registration/user.model';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  equalTo: (equalControl: AbstractControl) => ValidatorFn;
  userListForm: FormGroup;
  userModel: UserModel = new UserModel;

  toggle_Form:boolean = false;

  userList:any = [];
  constructor(private formBuild: FormBuilder, private userApi: UserApiService, private router:Router) { }

  ngOnInit(): void {
    this.userListForm = this.formBuild.group({
      id:[''],
      userName:['', [Validators.required, Validators.max(30), Validators.min(5)]],
      firstName:['',[Validators.required, Validators.max(30), Validators.min(5)]],
      lastName:[''],
      email: [''],

      // email: ['', Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
      phoneNumber:['', [Validators.required, Validators.max(10), Validators.min(10)]],
      // password:[''],      
    })
    this.getUserList();
  }

  getUserList(){
    this.userApi.getUser().subscribe(res=>{
        this.userList = res;
    })
  }

  deleteUserRecord(id:any){
    this.userApi.deleteUser(id)
    .subscribe(res=>{
      alert('Record Deleted ' + id);
      this.getUserList();
      
    })
  }

  edit(row:any){
    console.log(row.id);
    this.toggle_Form = !this.toggle_Form;

    this.userListForm.controls['id'].setValue(row.id);
    this.userListForm.controls['userName'].setValue(row.userName);
    this.userListForm.controls['firstName'].setValue(row.firstName);
    this.userListForm.controls['lastName'].setValue(row.lastName);
    this.userListForm.controls['email'].setValue(row.email);

    //this.userModel.userName = row.userName;
    //this.userListForm.controls['userId'].setValue(row.id)
    //this.userListForm.controls['userName'].setValue(row.userName)
    // this.userListForm.controls['firstName'].setValue(row.firstName);
    // this.userListForm.controls['lastName'].setValue(row.lastName);
    // this.userListForm.controls['email'].setValue(row.email);
  }

  toggleForm(){
    this.toggle_Form = !this.toggle_Form;
  }
}
