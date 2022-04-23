import { Component, ComponentDecorator } from '@angular/core';
import countries from './countries.json';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Countries';
  // public countryList:{name:string, code:number}[] = countries;
  allCountries=countries;
}
