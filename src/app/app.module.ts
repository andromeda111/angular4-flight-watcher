import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { FormsModule }   from '@angular/forms'

import { AppComponent } from './app.component'
import { MovieFormComponent } from './movie-form/movie-form.component'

import { MoviesService } from './services/movies.service'

import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

@NgModule({
  declarations: [
    AppComponent,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,
    // HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
