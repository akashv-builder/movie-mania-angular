import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Service/movie.service'
@Component({
  selector: 'app-favmovies',
  templateUrl: './favmovies.component.html',
  styleUrls: ['./favmovies.component.css']
})
export class FavmoviesComponent implements OnInit {
  favMoviesList=[];
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.movieService.showFav().subscribe((res) =>{
      this.favMoviesList = res.movies;
  })


}
}