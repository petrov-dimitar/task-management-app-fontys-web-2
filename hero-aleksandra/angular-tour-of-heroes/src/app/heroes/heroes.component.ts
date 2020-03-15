import { Component, OnInit } from '@angular/core';
//Improt the hero as an object
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
//import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
// export class HeroesComponent implements OnInit {

//   // Hero property
//   //hero =  'Windstorm';
//   //hero: Hero = {
//     //id: 1,
//     //name: 'Windstorm'
//     heroes: Hero[];

//    constructor(private heroService: HeroService, private messageService: MessageService) { }

//    ngOnInit() {
//      this.getHeroes(); 
//    }
//    selectedHero: Hero;

//   onSelect(hero: Hero): void {
//   this.selectedHero = hero;
//   this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
//   }
//   getHeroes(): void {
//     this.heroService.getHeroes()
//         .subscribe(heroes => this.heroes = heroes);
//   }
// }
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
