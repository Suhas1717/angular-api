import { Component, OnInit } from '@angular/core';
import { FAndQService } from '../f-and-q.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FaqModule } from './faq.module';
import { map } from 'rxjs'; 
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqObj:FaqModule = new FaqModule();
  FormVal !: FormGroup;
  data:any = [];
  constructor(private faq:FAndQService, private formbuild:FormBuilder) { 
    this.faq.getData().subscribe(data=>{
      console.warn(data);
      this.data = data;
    })
  }
 
  ngOnInit(){
    this.FormVal = this.formbuild.group({
      // QuestionId:[''],
      // Question:[''],
      // QuestionCategory:[''],
      // author:[''],
      // CreatedBy:[''],
      // CreatedOn: [''],
      // UpdatedBy:[''],

      id:[''],
      name:[''],
      email:[''],
      gender:[''],
      author:[''],
    })
    
  }
  postFaqData(){
    // this.faqObj.id = this.FormVal.value.id;
    this.faqObj.title = this.FormVal.value.name;
    // this.faqObj.email = this.FormVal.value.email;
    // this.faqObj.gender = this.FormVal.value.gender;
    // this.faqObj.status = this.FormVal.value.status;
    // this.faqObj.UpdatedBy = this.FormVal.value.UpdatedBy;

    this.faq.postData(this.faqObj)
    .subscribe(res=>{
      console.log(res);
      alert("Added successfully")
      this.FormVal.reset();
     }
    );
  }
  deleteFaqData(){
   // this.faqObj.id = this.FormVal.value.id;
    this.faqObj.title = this.FormVal.value.name;
    // this.faqObj.email = this.FormVal.value.email;
    // this.faqObj.gender = this.FormVal.value.gender;
    // this.faqObj.status = this.FormVal.value.status;
    // this.faqObj.UpdatedBy = this.FormVal.value.UpdatedBy;

    this.faq.deleteData(this.faqObj)
    .subscribe(res=>{
      console.log(res);
      alert(" Deleted successfully")
      this.FormVal.reset();
     }
    );
  }
  id:any = '';
  editUser(element:any){
    console.log(element);
    return this.id = element
  }
}
