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
     return this.http.post<any>('https://gorest.co.in/public/v2/todos', data)
     .pipe(map((res:any)=>{
       return res;
     }))
   }

    //get data
    getData(){
      let url = 'https://gorest.co.in/public/v2/todos';
      return this.http.get(url);
    }

    deleteData(id:any){
      return this.http.delete('https://gorest.co.in/public/v2/todos'+id).
      pipe(map((res:any)=>{
        return res;
      }))
    }

    updateData(data:any, id:number){
      return this.http.put<any>('https://gorest.co.in/public/v2/todos', id, data)
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

    
}
