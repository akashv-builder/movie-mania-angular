import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { TMDB } from '../Config/tmdb.config';
import { App } from '../Config/app.config';
@Injectable()
export class MovieService {

  constructor(private http : Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});
  // Function to get search text and make service call to get movies fromTMDB
  searchMovie(gettingQueryFromComponent) {
    return this.http.get(TMDB.search_api+gettingQueryFromComponent)
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }

   
   private handleError(error: Response){
     return Observable.throw(error.statusText);
   }

   addMovie(movieRecievedBymovieComponentToSave) {
    return this.http.post(App.apiUrl+"movies", movieRecievedBymovieComponentToSave, {headers: this.headers})
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
  }

  showFav() {
    debugger
    return this.http.get(App.apiUrl+"movies")
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }
}