import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';
// import { HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
// import { Response } from '@angular/http';
// import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MoviesService]
})

export class AppComponent {
  title = 'app';
  movieList = [];

  constructor(private moviesService: MoviesService){
    this.getMovies();
  }

  ngOnInit(): void {

  }

  getMovies() {
    this.moviesService.getMovies().subscribe(data => this.movieList = data)
  }

}
