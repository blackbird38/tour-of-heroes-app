/*Notice that the new service imports the Angular Injectable symbol and annotates the class
with the @Injectable() decorator. This marks the class as one that participates in the dependency
 injection system. The HeroService class is going to provide an injectable service, and it can
  also have its own injected dependencies.
  The @Injectable() decorator accepts a metadata object for the service, the same way the
  @Component() decorator did for your component classes.

  The HeroService could get hero data from anywhere—a web service, local storage,
  or a mock data source*/

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  /*making the HeroService available to the dependency injection system by registering a provider.
  A provider is something that can create or deliver a service; in this case, it instantiates
  the HeroService class to provide the service.*/
  providedIn: 'root' /*registers a provider with the 'root injector' for thr service by including provider metadata*/
})
/*When you provide the service at the root level, Angular creates a single, shared instance of HeroService
and injects into any class that asks for it.*/

export class HeroService {

  constructor() { }

  /*to return the mock heroes*/
  getHeroes(): Observable<Hero[]> {
    return of(HEROES); /*returns an Observable<Hero[]> that emits a single value, the array of mock heroes.*/
  }
}
