import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import { map, pipe } from 'rxjs';
import { FaqModule } from './faq/faq.module';

@Injectable({
  providedIn: 'root'
})
export class FAndQService {

  constructor(private http:HttpClient) {}
    //post data using post method
   postData(data:any){
     return this.http.post<any>('http://localhost:3000/posts', data)
     .pipe(map((res:any)=>{
       return res;
     }))
   }

    //get data
    getData(){
      let url = 'http://localhost:3000/posts';
      return this.http.get(url);
    }

    updateData(data:any, id:number){
      return this.http.put<any>('http://localhost:3000/posts', id, data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }

    //to update data
    // updateData(d:FaqModule){
    //   return this.http.put('https://jsonplaceholder.typicode.com/todos/',+d.id).pipe(map((res:any)=>{
    //     return res;
    //   }))
    // }

    deleteData(id:number){
      return this.http.get('http://localhost:3000/posts'+id).pipe(map((res:any)=>{
        return res;
      }))
    }
}