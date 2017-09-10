import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  results = {};
  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.http.get('http://pokeapi.co/api/v2/pokemon').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
      console.log(data)
    });
    var test = 'blah';
  }
}
