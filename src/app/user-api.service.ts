import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http:HttpClient) { }
    usersURL = 'http://localhost:3000/users/';
    
    postUser(data:any){
    console.log(data)
    return this.http.post(this.usersURL,data)
    .pipe(map((res)=>{
      return res;
    }))
  }

  getUser(){
    return this.http.get(this.usersURL)
    // .pipe(catchError(this.handleError))
    .pipe(map((res)=>{
      return res;
    }))
  }
   handleError(error: HttpErrorResponse){
    console.log("Unknown Error Occured");
    return throwError(error);
  }

  deleteUser(id:any){
    console.log(id);
    return this.http.delete<any>('http://localhost:3000/users/'+id)
    .pipe(map((res)=>{
      return res;
    }))
  }


  deleteData(id:any){
    return this.http.delete<any>(this.usersURL+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateUser(id:number, data:any){
    return this.http.put(this.usersURL+id, data)
    .pipe(map((res)=>{
      return res;
    }))
  }

}
