import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES
  constructor() { }

  ngOnInit() {
    this.selectedHero.name = 'Default'
    this.selectedHero.id = 0
  }
  selectedHero: Hero

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
