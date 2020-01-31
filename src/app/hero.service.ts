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
import { catchError, map, tap } from 'rxjs/operators';
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
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
    /*The catchError() operator intercepts an Observable that failed. It passes the error an error
    handler that can do what it wants with the error.*/
  }


  /** GET hero by id. Will 404 if id not found */
  /*
  The server should respond with a single hero rather than an array of heroes.
  getHero() returns an Observable<Hero> ("an observable of Hero objects") rather than
  an observable of hero arrays .*/
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /*Instead of handling the error directly, it returns an error handler
  function to catchError that it has configured with both the name of the operation
  that failed and a safe return value.*/
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /*After reporting the error to the console, the handler constructs a user friendly message
  and returns a safe value to the app so the app can keep working.
  Because each service method returns a different kind of Observable result, handleError()
  takes a type parameter so it can return the safe value as the type that the app expects.*/
}
