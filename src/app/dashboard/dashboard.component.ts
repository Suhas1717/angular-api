import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardModel } from './dashboard.model';
import { ApiService } from '../api.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { IQuestionRequestPayload, IQuestionResponsePayload } from '../interfaces/question.interface';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]

})
export class DashboardComponent implements OnInit {
  FormVal !: FormGroup;
  
  //modelObj : DashboardModel = new DashboardModel();

  questionI:IQuestionResponsePayload[];
  searchValue:string = '';
  getData:IQuestionResponsePayload[];
  btnSave!: boolean;
  btnUpdate!:  boolean;
  inputID !: boolean;
  err:boolean = false;
  ID:string;
  readonly:boolean = true;
  currentDate:string;

  constructor(private formbuild: FormBuilder, private api:ApiService, private authService:AuthService,
    private datePipe:DatePipe, private router:Router) { 
    this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.FormVal = this.formbuild.group({
      id: ['', Validators.required],
      Question: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(40)]],
      QuestionCategory: ['', [Validators.required]],
      // Answer: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
      CreatedBy: ['', Validators.required],
     // UpdatedBy: [''],
    })
        this.getAllRecord();
        this.ID = sessionStorage.getItem('token');
      
    }

/////////////////////////////////////////////////
/////////////// Validation //////////////////////
/////////////////////////////////////////////////

get questionValidation(){
  return this.FormVal.get('Question');
}

get quesCatValidation(){
  return this.FormVal.get('QuestionCategory');
}

get createdByValidation(){
  return this.FormVal.get('CreatedBy');
}

//////////////////////////////
////// Authentication ////////
//////////////////////////////

// logout(){
//   this.authService.logout();
//   this.router.navigate(['login']);
// }    

    //post all data
    postAllData(){
     //console.log(this.modelObj);
    
     const payload:IQuestionRequestPayload = {
        qId: this.FormVal.value.id,
        question : this.FormVal.value.Question,
        questionCategory: this.FormVal.value.QuestionCategory,
        createdBy:this.FormVal.value.CreatedBy,
        createdOn: this.FormVal.value.currentDate,
     }
     console.log(payload)
     if(this.FormVal.valid){
      this.api.postData(payload)
      .subscribe(res=>{
        console.log(res);
        alert("Saved");
        let c = document.getElementById('cancel');
        this.FormVal.reset();
        c?.click();  
        this.getAllRecord();
      })
    }else{
      alert("Please enter required fields correctly");
    }
      //const formPayload = this.FormVal.getRawValue();      
    }

    ////////////////////  To get all the data ///////////////
    getAllRecord(){
      this.api.getData().subscribe((res :IQuestionResponsePayload[])=>{
        this.getData = res;
      })
    }
   
    ///////////////////// Delete Record /////////////////////
    deleteRecord(id:number){ 
      console.log(id);
      this.api.deleteData(id)
      .subscribe(result=>{
        alert('Record Deleted ' + id);
        this.getAllRecord();        
      });
    }

/////////////////////////Edit record////////////////////// 
    editRecord(row:IQuestionRequestPayload){
        this.btnSave = false;
        this.btnUpdate = true;      
         

        //this.modelObj.id = row.id;
        this.FormVal.controls['id'].setValue(row.qId);
        this.FormVal.controls['Question'].setValue(row.question);
        this.FormVal.controls['QuestionCategory'].setValue(row.questionCategory);
        this.FormVal.controls['CreatedBy'].setValue(row.createdBy);
       // this.FormVal.controls['C'].setValue(row.createdOn);
       // this.FormVal.controls['UpdatedBy'].setValue(row.UpdatedBy);
        this.inputID = false;
        console.log(row.qId);
        console.log( this.FormVal);
    }

//////////////////////////To update record ////////////////////////
    updateRecord(){
      const payload:IQuestionResponsePayload = {
        qId: this.FormVal.value.id,
        question : this.FormVal.value.Question,
        questionCategory: this.FormVal.value.QuestionCategory,
        createdBy:this.FormVal.value.CreatedBy,
        createdOn:this.FormVal.value.createdOn
     }      
      this.api.updateData(payload, payload.qId)
      .subscribe(res=>{
        console.log(payload.qId)
        alert('Record updated');
        let b = document.getElementById('cancel');
        b?.click();
        this.FormVal.reset();
        this.getAllRecord();
      })
    }

    showAddBtn(){
      this.FormVal.reset();
      this.btnSave = true;
      this.btnUpdate = false
      this.inputID = true;
    }

    getID(id:any){
     console.log(id);
    }

   /////////////////////////////////////////
   ///////// Http Error Handling ///////////
   /////////////////////////////////////////
   // errMsg:string;
   // errorHandling(error:any){
   //   if(error.status === 10){}
   //   else if(error.status === 400){
   //     this.errMsg = "Username or password is wrong";
   //   }else if(error.status === 401){
   //     this.errMsg = "Unauthorised User: Access Denied Due To Invalid Credentilas";
   //   }else if(error.status === 403){
   //     this.errMsg = "You dont have required priviliges to perform this task";
   //   }else if(error.status === 404){
   //     this.errMsg = "User Not Found!";
   //   }else{
   //     this.errMsg = "Something Went Wrong, Please Try Again";
   //   }
   // }
}
