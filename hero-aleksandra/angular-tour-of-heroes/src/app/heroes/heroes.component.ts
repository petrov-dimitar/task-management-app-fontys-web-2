import { Component, OnInit } from '@angular/core';
//Improt the hero as an object
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

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
    heroes: Hero[];

   constructor(private heroService: HeroService, private messageService: MessageService) { }

   ngOnInit() {
     this.getHeroes(); 
   }
   selectedHero: Hero;

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}

