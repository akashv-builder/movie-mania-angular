import { Component, OnInit,Input } from '@angular/core';
import{MovieService} from '../../../Service/movie.service'
@Component({
  selector: 'app-favmovie',
  templateUrl: './favmovie.component.html',
  styleUrls: ['./favmovie.component.css'],
  providers:[MovieService]
})
export class FavmovieComponent implements OnInit {
@Input() favmovieSendByFavMovies;
  constructor(private movieService:MovieService) { }

  ngOnInit() {
  }
  deleteMovie(){
    return this.movieService.deleteMovie(this.favmovieSendByFavMovies).subscribe((res) =>{
      console.log("sucessfully deleted")
    })

  }
}
