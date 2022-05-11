import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const API_KEY = "PREDEFINED STRING";
    
    return next.handle(request.clone({setHeaders:{API_KEY}}));


    // const API_KEY = 'TEST_STIRING';
    // const req = request.clone({
    //   setHeaders:{
    //     API_KEY, 
    //   }
    // })
  }
}
