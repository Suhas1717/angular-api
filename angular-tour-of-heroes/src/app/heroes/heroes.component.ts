import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  //import the Hero interface from hero.ts and set its property values 
  //here 'hero' is now object so to access it from heroes.component.html 
  //properties like 'id' we should use 'hero.id'
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
  
  constructor() { }

  ngOnInit(): void {

  }  

}
