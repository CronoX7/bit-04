import { Component } from '@angular/core';
import {Store,select} from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Comic } from 'src/app/interfaces/schema';
import { delFavComic } from 'src/app/store/comics.actions';


@Component({
  selector: 'app-fav-comics',
  templateUrl: './fav-comics.component.html',
  styleUrls: ['./fav-comics.component.css']
})
export class FavComicsComponent {
  
  comic: Comic[]=[]


  constructor(
    private store: Store<AppState>
  ){}

 

}
