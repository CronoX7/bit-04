import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Comic } from 'src/app/interfaces/schema';
import { adFavComics } from 'src/app/store/comics.actions';

@Component({
  selector: 'app-card-comic',
  templateUrl: './card-comic.component.html',
  styleUrls: ['./card-comic.component.css'],
})
export class CardComicComponent {
  public showButtons = true;
  @Input('comicData') comic: any;
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>(); //PASO 1 Se crea el método Output

  constructor(private store: Store<AppState>) {}

  addComic(
    _id: string,
    pubHouse: string,
    name: string,
    imgComic: string,
    price: number,
    mainCharacter: string,
    storyArc: string,
    numPages: number,
    cover: string,
    format: string,
  ){
    const comic: Comic ={
      _id: _id,
      pubHouse: pubHouse,
      name: name,
      imgComic: imgComic,
      price: price,
      mainCharacter: mainCharacter,
      storyArc: storyArc,
      numPages: numPages,
      cover: cover,
      format: format,
    }
    this.store.dispatch(adFavComics({comic}))
  }
}
