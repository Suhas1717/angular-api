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
      QuestionId:[''],
      Question:[''],
      QuestionCategory:[''],
      Answer:[''],
      CreatedBy:[''],
      CreatedOn: [''],
      UpdatedBy:[''],
    })
    
  }
  postFaqData(){
    this.faqObj.Question = this.FormVal.value.author;
    // this.faqObj.title = this.FormVal.value.title;

    this.faq.postData(this.faqObj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee Added successfully")
      this.FormVal.reset();
     }
    );
  }
  editUser(element:any){
console.log(element)
  }
}
