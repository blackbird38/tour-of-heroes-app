import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  /*Reserve the constructor for simple initialization such as wiring constructor parameters
  to properties. The constructor shouldn't do anything. It certainly shouldn't call a
  function that makes HTTP requests to a remote server as a real data service would.*/

  /*injecting the HeroService*/
  constructor(private heroService: HeroService) { }
  /*The parameter heroService simultaneously defines a private heroService property and
  identifies it as a HeroService injection site.
  When Angular creates a HeroesComponent, the Dependency Injection system sets
  the heroService parameter to the singleton instance of HeroService.*/


  /*call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit()
  at an appropriate time after constructing a HeroesComponent instance.*/
  ngOnInit() {
    this.getHeroes();
  }

  /*retrieves the heroes from the service*/

  /*waits for the Observable to emit the array of heroes — which could happen now or
   several minutes from now. The subscribe() method passes the emitted array (heroes) to the callback,
   which sets the component's 'heroes' property.
   This asynchronous approach will work when the HeroService requests heroes from the server.*/
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
  /*There's really nothing for the component to do with the Observable returned by heroService.delete()
  but it must subscribe anyway.*/
}
