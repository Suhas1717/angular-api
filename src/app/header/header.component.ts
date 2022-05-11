import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ifLoggedIn():any{    
      let c = confirm("You will be logged out")
      if(c == true){
        sessionStorage.setItem('isLoggedIn', 'false');
        sessionStorage.removeItem('token')
      }else{
        this.router.canceledNavigationResolution;
      }
  }
}
