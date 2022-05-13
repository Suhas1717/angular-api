import { Injectable } from '@angular/core';
import { 
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { IQuestionRequestPayload } from '../interfaces/question.interface';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboradResolveResolver implements Resolve<any> {
  constructor(private apiService: ApiService){}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log("Get Method Call from Resolver")
    return this.apiService.getData().pipe(
      catchError(error =>{
        return of('No data found');
      })
    )
  }
}
