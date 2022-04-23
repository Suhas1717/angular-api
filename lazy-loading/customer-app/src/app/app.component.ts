import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

let cars:string[]=['Fiat', 'Ford', 'Ferrari', 'BMW', "Audi"]
export class AppComponent {
  carList = cars;
  title = 'customer-app';
}
