import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { MovieSearchComponent } from './Components/movies/movie-search/movie-search.component';
import { MovieListComponent } from './Components/movies/movie-list/movie-list.component';
import { MovieComponent } from './Components/movies/movie-list/movie/movie.component';
import { FavmoviesComponent } from './Components/favmovies/favmovies.component';
import { FavmovieComponent } from './Components/favmovies/favmovie/favmovie.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    MovieSearchComponent,
    MovieListComponent,
    MovieComponent,
    FavmoviesComponent,
    FavmovieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
