import { Component, OnInit } from '@angular/core';
//Improt the hero as an object
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // Hero property
  //hero =  'Windstorm';
  //hero: Hero = {
    //id: 1,
    //name: 'Windstorm'
    heroes = HEROES;

   constructor() { }

   ngOnInit() {
   }
   selectedHero: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}

