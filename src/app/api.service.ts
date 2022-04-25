import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
   
   }

quseURL = 'http://localhost:3000/questions'
postData(data:any){
  console.log(data);
  return this.http.post<any>(this.quseURL, data)
  .pipe(map((res:any)=>{
    return res;
  }))
}

getData(){
  return this.http.get<any>(this.quseURL)
  .pipe(map((res:any)=>{
    return res;
  }))
}

deleteData(id:any){
  return this.http.delete<any>('http://localhost:3000/questions/'+id)
  .pipe(map((res:any)=>{
    return res;
  }))
}

updateData(data:any,id:number){
    return this.http.put<any>('http://localhost:3000/questions/'+id, data)
    .pipe(map((res)=>{
      return res;
  }))
}

//////////////////////////////////////////////////////////////////////
//////////////////////////// User Services ///////////////////////////
//////////////////////////////////////////////////////////////////////





}
