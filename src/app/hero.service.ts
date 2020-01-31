/*Notice that the new service imports the Angular Injectable symbol and annotates the class
with the @Injectable() decorator. This marks the class as one that participates in the dependency
 injection system. The HeroService class is going to provide an injectable service, and it can
  also have its own injected dependencies.
  The @Injectable() decorator accepts a metadata object for the service, the same way the
  @Component() decorator did for your component classes.

  The HeroService could get hero data from anywhere—a web service, local storage,
  or a mock data source*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import {log} from 'util';

@Injectable({
  /*making the HeroService available to the dependency injection system by registering a provider.
  A provider is something that can create or deliver a service; in this case, it instantiates
  the HeroService class to provide the service.*/
  providedIn: 'root' /*registers a provider with the 'root injector' for thr service by including provider metadata*/
})
/*When you provide the service at the root level, Angular creates a single, shared instance of HeroService
and injects into any class that asks for it.*/

export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  /*This is a typical "service-in-service" scenario: you inject the MessageService into the HeroService which is
  injected into the HeroesComponent.*/
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  /*This particular HttpClient.get() call returns an Observable<Hero[]>; that is,
  "an observable of hero arrays". In practice, it will only return a single hero array.*/
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    return this.http.get<Hero[]>(this.heroesUrl);
  }

/*Like getHeroes(), getHero() has an asynchronous signature. It returns a mock hero as an Observable,
 using the RxJS of() function.*/
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
