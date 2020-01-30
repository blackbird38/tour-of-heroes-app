import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; /*so the app can have routing functionality*/
import { HeroesComponent } from './heroes/heroes.component'; /* will give the Router somewhere to go once the routes are configured*/
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

/*
  Routes tell the Router which view to display when a user clicks a link or pastes
  a URL into the browser address bar.
  A typical Angular Route has two properties:
    path: a string that matches the URL in the browser address bar.
    component: the component that the router should create when navigating to this route.
    <router-outlet></router-outlet> (added in app.components)
    http://localhost:4200/heroes
 */
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
  /*The colon (:) in the path indicates that :id is a placeholder for a specific hero id.*/
];

/*The @NgModule metadata initializes the router and starts its listening
  for browser location changes.*/
@NgModule({
  imports: [RouterModule.forRoot(routes)], /*adds the RouterModule to the AppRoutingModule
  imports array and configures it with the routes by calling RouterModule.forRoot()*/
  exports: [RouterModule] /*AppRoutingModule exports RouterModule so it will be available throughout the app.*/
})
export class AppRoutingModule { }
