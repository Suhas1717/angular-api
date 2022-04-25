import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardModel } from './dashboard.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  FormVal !: FormGroup;
  modelObj : DashboardModel = new DashboardModel();

 
  getData:any = [];
  btnSave!: boolean;
  btnUpdate!:  boolean;
  maxID:number = 0;

  constructor(private formbuild: FormBuilder, private api:ApiService) { 
    
  }

  ngOnInit(): void {
    this.FormVal = this.formbuild.group({
      id: ['', Validators.required],
      Question: ['', Validators.required],
      QuestionCategory: [''],
      Answer: [''],
      CreatedBy: [''],
     // UpdatedBy: [''],
    })

   

    this.getAllRecord();
    }
//////////// Get Id ////////////////////
getMaxId(){

}



    //post all data
    postAllData(){
      this.modelObj.id = this.FormVal.value.id;
      this.modelObj.Question = this.FormVal.value.Question;
      this.modelObj.QuestionCategory = this.FormVal.value.QuestionCategory;
      this.modelObj.Answer = this.FormVal.value.Answer;
      this.modelObj.CreatedBy = this.FormVal.value.CreatedBy;
     // this.modelObj.UpdatedBy = this.FormVal.value.UpdatedBy;
     
     console.log(this.modelObj.id);
     
      this.api.postData(this.modelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Saved");
        let c = document.getElementById('cancel');
        // this.FormVal.reset;
        c?.click();  
        this.getAllRecord();
      })

      const formPayload = this.FormVal.getRawValue()
      
    }

    ////////////////////  To get all the data ///////////////
    getAllRecord(){
      this.api.getData().subscribe(res=>{
        this.getData = res;
      })
    }
   
    ///////////////////// Delete Record /////////////////////
    deleteRecord(id:any){
      this.api.deleteData(id)
      .subscribe(res=>{
        alert('Record Deleted ' + id);
        this.getAllRecord();
        
      })
    }

/////////////////////////Edit record////////////////////// 
    editRecord(row:any){
        this.btnSave = false;
        this.btnUpdate = true;
        this.modelObj.id = row.id;
        this.FormVal.controls['id'].setValue(row.id);
        this.FormVal.controls['Question'].setValue(row.Question);
        this.FormVal.controls['QuestionCategory'].setValue(row.QuestionCategory);
        this.FormVal.controls['Answer'].setValue(row.Answer);
        this.FormVal.controls['CreatedBy'].setValue(row.CreatedBy);
       // this.FormVal.controls['UpdatedBy'].setValue(row.UpdatedBy);
        console.log(row.id);
    }

//////////////////////////To update ecord ////////////////////////

    updateRecord(){
      this.modelObj.Question = this.FormVal.value.Question;
      this.modelObj.QuestionCategory = this.FormVal.value.QuestionCategory;
      this.modelObj.Answer = this.FormVal.value.Answer;
      this.modelObj.CreatedBy = this.FormVal.value.CreatedBy;
      //this.modelObj.UpdatedBy = this.FormVal.value.UpdatedBy;
      
      this.api.updateData(this.modelObj, this.modelObj.id)
      .subscribe(res=>{
        console.log(this.modelObj.id)
        alert('Record updated');
        let b = document.getElementById('cancel');
        b?.click();
        this.FormVal.reset();
      })
      this.getAllRecord();
    }

    showAddBtn(){
      this.FormVal.reset();
      this.btnSave = true;
      this.btnUpdate = false
    }

    getID(id:any){
     console.log(id);
    }
    // closeForm(){
    //   let c = document.getElementById('cancel');
    //   c?.click();
    // }
}
