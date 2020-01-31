Node.js
https://nodejs.org
#### ```node -v ```

npm package manager
https://docs.npmjs.com/cli/install.html
#### ```npm -v```

cli- Command-line interface 
#### ```npm install -g @angular/cli```
(-g = globally)

#### ```ng new my-app```
#### ```cd my-app```
#### ```ng serve --open / ng serve -o```

application shell
```{{title}}``` the double curly braces are Angular's interpolation binding syntax
```src/styles.css``` - Put your application-wide styles here.

#### ng generate component heroes
The ```ngOnInit()``` is a lifecycle hook. Angular calls ```ngOnInit()``` shortly after creating a component. It's a good place to put initialization logic.


```<h2>{{hero.name | uppercase}} Details</h2>``` - The word uppercase in the interpolation binding, right after the pipe operator ( | ), activates the built-in UppercasePipe.

[Pipes](https://angular.io/guide/pipes) are a good way to format strings, currency amounts, dates and other display data. Angular ships with several built-in pipes and you can create your own.

```[(ngModel)]``` is Angular's two-way data binding syntax. ```ngModel``` is a valid Angular directive, but not available by default. It belongs to the optional ```FormsModule``` and you must opt-in to using it.
```<li *ngFor="let hero of heroes">``` The ```*ngFor``` is Angular's repeater directive. It repeats the host element for each element in a list. ```<li>``` is the host element.

You define private styles either inline in the ```@Component.styles``` array or as stylesheet file(s) identified in the ```@Component.styleUrls``` array.

```<li *ngFor="let hero of heroes" (click)="onSelect(hero)">``` This is an example of Angular's event binding syntax. The parentheses around ```click``` tell Angular to listen for the ```<li>``` element's click event. When the user clicks in the ```<li>```, Angular executes the ```onSelect(hero)``` expression.

Use Angular's ```*ngIf``` directive to conditionally include or exclude a block of HTML: ```<div *ngIf="selectedHero"></div>``` The component should only display the selected hero details if the selectedHero exists.

Toggle a CSS style class with a class binding: ```[class.selected]="hero === selectedHero"``` - when the current row hero is the same as the selectedHero, Angular adds the selected CSS class. When the two heroes are different, Angular removes the class.

### 3. Master/Detail Components
#### ```ng generate component hero-detail```

* created a separate, reusable HeroDetailComponent.
* used a property binding to give the parent HeroesComponent control over the child HeroDetailComponent.
* used the @Input decorator to make the hero property available for binding by the external HeroesComponent.

### 4. Services
Why? Components should focus on presenting data and delegate data access to a service. Services are a great way to share information among classes that don't know each other.

#### ```ng generate service hero```
To learn more about providers, see [Providers](https://angular.io/guide/providers). To learn more about injectors, see the [Dependency Injection guide](https://angular.io/guide/dependency-injection).

Observable is one of the key classes in the [RxJS library](https://rxjs-dev.firebaseapp.com/).
Angular's HttpClient methods return RxJS Observables. [tuto](https://angular.io/tutorial/toh-pt6)

#### ```ng generate component messages```

#### ```ng generate service message```

Summary
* refactored data access to the HeroService class.
* registered the HeroService as the provider of its service at the root level so that it can be injected anywhere in the app.
* used Angular Dependency Injection to inject it into a component.
* gave the HeroService get data method an asynchronous signature.
* discovered Observable and the RxJS Observable library.
* used RxJS of() to return an observable of mock heroes (Observable<Hero[]>).
* The component's ngOnInit lifecycle hook calls the HeroService method, not the constructor.
* created a MessageService for loosely-coupled communication between classes.
* The HeroService injected into a component is created with another injected service, MessageService.

### 5. Routing
#### ```ng generate module app-routing --flat --module=app```
* --flat puts the file in src/app instead of its own folder.
* --module=app tells the CLI to register it in the imports array of the AppModule

#### ```ng generate component dashboard```
* added the Angular router to navigate among different components.
* turned the AppComponent into a navigation shell with <a> links and a <router-outlet>.
* configured the router in an AppRoutingModule
* defined simple routes, a redirect route, and a parameterized route.
* used the routerLink directive in anchor elements.
* refactored a tightly-coupled master/detail view into a routed detail view.
* used router link parameters to navigate to the detail view of a user-selected hero.
* shared the HeroService among multiple components.


### 6. HTTP

HttpClient is Angular's mechanism for communicating with a remote server over HTTP.
Make HttpClient available everywhere in the app in two steps. First, add it to the root AppModule by importing it. Next, still in the AppModule, add HttpClient to the imports array.

[the In-memory Web API module](https://github.com/angular/in-memory-web-api)
After installing the module, the app will make requests to and receive responses from the HttpClient without knowing that the In-memory Web API is intercepting those requests, applying them to an in-memory data store, and returning simulated responses.
#### ```npm install angular-in-memory-web-api --save```
#### ```ng generate service InMemoryData```

### HttpClient methods return one value

All HttpClient methods return an RxJS Observable of something.
HTTP is a request/response protocol. You make a request, it returns a single response.
In general, an observable can return multiple values over time. An observable from HttpClient always emits a single value and then completes, never to emit again.

HttpClient.get() returns response data
HttpClient.get() returns the body of the response as an untyped JSON object by default. Applying the optional type specifier, <Hero[]> , gives you a typed result object.
The server's data API determines the shape of the JSON data. The Tour of Heroes data API returns the hero data as an array.
Other APIs may bury the data that you want within an object. You might have to dig that data out by processing the Observable result with the RxJS map() operator.


