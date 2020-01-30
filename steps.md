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

#### ```ng generate component hero-detail```
