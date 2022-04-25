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

}
