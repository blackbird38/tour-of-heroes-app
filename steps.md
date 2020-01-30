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
