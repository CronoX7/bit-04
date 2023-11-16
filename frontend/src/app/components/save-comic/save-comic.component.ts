import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { CardComicComponent } from '../card-comic/card-comic.component';

@Component({
  selector: 'app-save-comic',
  templateUrl: './save-comic.component.html',
  styleUrls: ['./save-comic.component.css']
})

export class SaveComicComponent {
  //se asocia el id(variable) del html del componente card-comic
  //esto es otra forma de pasar información entre padre-hijo diferente de @inputs
  
  @ViewChild('cardComicComponent') cardComicComponent?: CardComicComponent;

  comicAdded = {};
  //se crea el constructor para pasar el changeDetectorRef y notificar manual los cambios
  constructor(public cf: ChangeDetectorRef) {

  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    if(this.cardComicComponent){
      this.cardComicComponent.showButtons = false;
      this.cf.detectChanges();
    }
  }

  //este es el método que recibe el valor del notificador del hijo add-comic
  //en el parámetro "event" (o cualquier nombre) llega el valor del formulario
  onFormChange(event: any){
    //se hace una asignación global de la variable para poder pasarla a otro componente hijo.
    this.comicAdded=event;
  }

}
