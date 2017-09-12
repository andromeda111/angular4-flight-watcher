import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import { HttpClient } from '@angular/common/http';

@Injectable ()
export class MoviesService {

  private apiUrl:string = 'http://localhost:3000/api'

  constructor(private http: Http) {}

  getMovies(){
    return this.http.get(this.apiUrl)
    .do(this.logResponse)
    .map(this.extractData)
    .catch(this.catchError)
  }

  getWatch(){
    return this.http.get(this.apiUrl + '/watch')
    .do(this.logResponse)
    .map(this.extractData)
    .catch(this.catchError)
  }

  postMovie(model:any){
    return this.http.post(this.apiUrl + '/add', model)
      .do(this.logResponse)
  }

  deleteMovie(movieId:number) {
    return this.http.delete(this.apiUrl + `/delete/${movieId}`)
    .do(this.logResponse)
  }

  addToWatch(movie:any){
    return this.http.post(this.apiUrl + '/watch/add', movie)
      .do(this.logResponse)
  }

  removeWatch(watchId:number) {
    return this.http.delete(this.apiUrl + `/watch/delete/${watchId}`)
    .do(this.logResponse)
  }

  private logResponse(res: Response) {
    console.log(res)
  }

  private extractData(res: Response) {
    return res.json()
  }

  private catchError(error: Response) {
    console.log(error)
    return Observable.throw(error.json() || 'Server Error')
  }



}
