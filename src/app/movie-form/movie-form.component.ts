import { Component, Output, EventEmitter } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
  providers: [MoviesService]
})

export class MovieFormComponent {

  newMovie = {};
  submitted = false;

  @Output() getMovieList = new EventEmitter<string>();

  constructor(private moviesService: MoviesService) {}

  submitNewMovie() {
    this.moviesService.postMovie(this.newMovie).subscribe(data => {
      this.refreshMovieList()
    });
  }

  refreshMovieList() {
    this.getMovieList.next();
  }
}
