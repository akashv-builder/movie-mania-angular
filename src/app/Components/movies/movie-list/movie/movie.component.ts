import { Component, OnInit,Input} from '@angular/core';
import { MovieService } from '../../../../Service/movie.service'
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:[MovieService]
})
export class MovieComponent implements OnInit {
  @Input() movierecievedbymovie: any;
  openModel:boolean=false;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }
 // Add favourite movie to database
 addMovie(sendToSaveInDbmovie) {
  this.movieService.addMovie(sendToSaveInDbmovie).subscribe((res) =>{
    alert("Successfully Added "+this.movierecievedbymovie.title+" to your favourite list.");  
  }, (error) =>{
    alert(""+this.movierecievedbymovie.title+" is already present in your favourite list."););
  })
}
}
