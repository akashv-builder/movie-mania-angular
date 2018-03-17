import { Component, OnInit,Input } from '@angular/core';
import{MovieService} from '../../../Service/movie.service';
import { TMDB } from '../../../Config/tmdb.config';
@Component({
  selector: 'app-favmovie',
  templateUrl: './favmovie.component.html',
  styleUrls: ['./favmovie.component.css'],
  providers:[MovieService]
})
export class FavmovieComponent implements OnInit {
@Input() favmovieSendByFavMovies;
image_base:string=TMDB.image_base;
  constructor(private movieService:MovieService) { }

  ngOnInit() {
  }
  deleteMovie(){
    return this.movieService.deleteMovie(this.favmovieSendByFavMovies).subscribe((res) =>{
      alert("Successfully Deleted "+this.favmovieSendByFavMovies.title+" from your favourite list.");
    },(err)=>{
      alert(this.favmovieSendByFavMovies.title+"  is already deleted from your favourite list.");
    })
  }
}
