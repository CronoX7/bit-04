import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-comic',
  templateUrl: './card-comic.component.html',
  styleUrls: ['./card-comic.component.css']
})
export class CardComicComponent {
  @Input("comicData") comic: any;
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEdit: EventEmitter<any> = new EventEmitter <any>(); //PASO 1 Se crea el método Output 
}
