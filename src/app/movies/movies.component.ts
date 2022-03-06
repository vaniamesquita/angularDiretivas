import { Component, OnInit } from '@angular/core';
// import { Movie } from './Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent  {

  movies = [
    {title: 'filme 1', rating: 5},
    {title: 'filme 2', rating: 3},
    {title: 'filme 3', rating: 2},
    {title: 'filme 4', rating: 1},
    {title: 'filme 5', rating: 5},
    {title: 'filme 6', rating: 4},
  ]

}
