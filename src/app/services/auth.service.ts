import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usersURL = 'http://localhost:3000/questions'


  constructor(private http:HttpClient) { }

  loginUser(user:any){
    return this.http.post<any>(this.usersURL, user)
  }

  logout():void{
    sessionStorage.setItem('isLoggedIn', 'false');
    sessionStorage.removeItem('token');
  }
}
