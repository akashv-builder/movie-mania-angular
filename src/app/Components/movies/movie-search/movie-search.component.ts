import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { MovieService } from '../../../Service/movie.service'
@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  providers:[MovieService]
})
export class MovieSearchComponent implements OnInit {
  @Output() success = new EventEmitter<any>();
  queryMovie:String='';
  public moviesList=[];
  constructor(private movieService : MovieService) { }

  ngOnInit() {
  }

  searchMovie() {
  	this.movieService.searchMovie(this.queryMovie).subscribe((res) =>{
  	this.moviesList = res.results;
  	this.success.emit({
      'moviesList': this.moviesList
    });
  	}, (error) =>{

  	})
  }

}