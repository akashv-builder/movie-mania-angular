import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-favmovie',
  templateUrl: './favmovie.component.html',
  styleUrls: ['./favmovie.component.css']
})
export class FavmovieComponent implements OnInit {
@Input() favmovieSendByFavMovies;
  constructor() { }

  ngOnInit() {
  }
  deleteMovie(favmovieSendByFavMovies){}
}
