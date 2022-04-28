import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http:HttpClient) { }
    usersURL = 'http://localhost:3000/users';
    
    postUser(data:any){
    console.log(data)
    return this.http.post(this.usersURL,data)
    .pipe(map((res)=>{
      return res;
    }))
  }

  getUser(){
    return this.http.get<any>(this.usersURL)
    .pipe(map((res)=>{
      return res;
    }))
  }

  deleteUser(id:number){
    return this.http.delete(this.usersURL+id)
    .pipe(map((res)=>{
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
