import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

/*This component simply receives a hero object through its hero property and displays it:
  <app-hero-detail [hero]="selectedHero"></app-hero-detail>*/
export class HeroDetailComponent implements OnInit {
  /* The 'hero' property must be an Input property, annotated with the @Input() decorator,
  because the external HeroesComponent will bind to it like this:
  <app-hero-detail [hero]="selectedHero"></app-hero-detail>*/
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  /*The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch.
    Route parameters are always strings.
    The JavaScript (+) operator converts the string to a number, which is
    what a hero id should be.*/

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back(); /*the Location service that you injected in the constructor*/
  }
}
