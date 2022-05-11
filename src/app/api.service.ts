import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IQuestionRequestPayload, IQuestionResponsePayload } from './interfaces/question.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
   
   }

// quseURL = 'http://localhost:3000/questions'
// quseURL = 'http://localhost:3000/questions'

api_url = environment.api_url;


// postData(data:IQuestionRequestPayload){
//   // const quseURL = '/question';
//   console.log(data);
//   // return this.http.post<any>(this.api_url+ quseURL, data)
//   return this.http.post<any>(this.quseURL, data)
//   .pipe(map((res:IQuestionResponsePayload)=>{
//     return res;
//   }))
// }

postData(data:IQuestionRequestPayload){
  const quseURL = '/question';
  return this.http.post<any>(this.api_url+quseURL, data)
  .pipe(map((res:IQuestionResponsePayload)=>{
    return resizeBy;
  }))
}

getData(){
  const quseURL = '/questions';
  return this.http.get<any>(this.api_url+quseURL)
  // return this.http.get<any>(this.quseURL)
  .pipe(map((res:IQuestionResponsePayload[])=>{
    return res;
  }))
}

deleteData(id:number){
  console.log(id)
  const quseURL = '/question';
  return this.http.delete<number>(this.api_url+quseURL+'/'+id)
  // return this.http.delete<any>(this.quseURL+id)
  // .pipe(map((res:any)=>{
  //   return res;
  // }))
}

updateData(data:any,id:number){
    console.log(id)
    const quseURL = '/question';
    return this.http.put<any>(this.api_url+quseURL,data)
    // return this.http.put<any>(this.quseURL+'/'+id, data)
    .pipe(map((res)=>{
      return res;
  }))
}

//////////////////////////////////////////////////////////////////////
//////////////////////////// User Services ///////////////////////////
//////////////////////////////////////////////////////////////////////





}
