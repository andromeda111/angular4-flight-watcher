import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { Movie } from './movie';
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
  showForm = false;

  constructor(private moviesService: MoviesService){
    this.getMovies();
  }

  ngOnInit(): void {
    let myMovie = new Movie(1, 'url', 'john')
    console.log('my movie is: '+ myMovie.title)
  }

  getMovies() {
    this.moviesService.getMovies().subscribe(data => this.movieList = data)
    this.showForm = false;
  }

  deleteMovie(movie) {
    let movieId = movie.id
    this.moviesService.deleteMovie(movieId).subscribe(result => {
      console.log(result)
      this.getMovies()
    })
  }

}
