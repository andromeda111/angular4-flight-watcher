import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MoviesService]
})

export class AppComponent {

  movieList = [];
  watchList = [];
  showForm = false;

  constructor(private moviesService: MoviesService){
    this.getMovies()
    this.getWatch()
  }

  getMovies() {
    this.moviesService.getMovies().subscribe(data => this.movieList = data)
    this.showForm = false;
  }

  getWatch() {
    this.moviesService.getWatch().subscribe(data => this.watchList = data)
  }

  deleteMovie(movie) {
    let movieId = movie.id
    this.moviesService.deleteMovie(movieId).subscribe(result => {
      this.getMovies()
    });
  }

  addToWatch(movie) {
    this.moviesService.addToWatch(movie).subscribe(result => {
      this.getWatch()
      this.getMovies()
    });
  }
  removeWatch(watch) {
    let watchId = watch.id
    this.moviesService.removeWatch(watchId).subscribe(result => {
      this.getWatch()
      this.getMovies()
    });
  }

}
