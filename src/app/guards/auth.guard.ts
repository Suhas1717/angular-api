import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  //create a constructor
  constructor(private route: Router){ }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if(this.isLoggedIn()){
      return true;
    }
    this.route.navigate(['login']);
    return false;   
  }
  
  
  public isLoggedIn():boolean{
    let status = false;
    if(sessionStorage.getItem('isLoggedIn') == 'true'){
      status = true;
    }else{
      status = false;
    }
    return status
  }
}
