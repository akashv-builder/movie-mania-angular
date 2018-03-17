import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Service/movie.service'
@Component({
  selector: 'app-favmovies',
  templateUrl: './favmovies.component.html',
  styleUrls: ['./favmovies.component.css'],
  providers:[MovieService],
})
export class FavmoviesComponent implements OnInit {
  favMoviesList=[];
  hideVar:boolean=false;
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.movieService.showFav().subscribe((res) =>{
      this.favMoviesList = res.movies;
      console.log(this.favMoviesList);
     if(this.favMoviesList.length==0){
      this.hideVar=true;
     }
  })
}
}