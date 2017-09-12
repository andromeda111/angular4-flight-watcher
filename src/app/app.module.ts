import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieFormComponent } from './movie-form/movie-form.component';

import { MoviesService } from './services/movies.service';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,
    // HttpClientModule,
    RouterModule.forRoot(ROUTES),
    HttpModule,
    FormsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
