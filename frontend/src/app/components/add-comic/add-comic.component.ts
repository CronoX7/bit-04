import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HomeService } from "../../services/home.service";
import { __values } from 'tslib';

@Component({
  selector: 'app-add-comic',
  templateUrl: './add-comic.component.html',
  styleUrls: ['./add-comic.component.css']
})
export class AddComicComponent implements OnInit {
  //Referencia un objeto o variable del html 
  //comicForm es la variable # que está asociada al form del html

  @ViewChild('comicForm') form?: NgForm;
  //Output para notificar este componente hacia los componentes padres.
  @Output ("notifyFormChange") notifyFormChange: EventEmitter<any> = new EventEmitter();



  constructor(public homeService: HomeService){}  
 
  ngOnInit(): void {
    this.homeService.selectedComic = {
      pubHouse: "",
      name: "",
      mainCharacter: "",
      storyArc: "",
      numPages: 0,
      cover: "",
      format: "",
      price: 0,
      imgComic: "",
    }
    this.homeService.hideButton = true;
  }

ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  
  //el método valueChange del formulario notifica cada vez que cualquier valñor (input) cambie

this.form?.valueChanges?.subscribe((values:any)=>{
  // cuando el formulario cambia de valor, se dispara el notificador con el valor de form.
  this.notifyFormChange.emit(values);
})

}
  
  //data= {name: ''};

addComic(form: NgForm){
  this.homeService.createComic(form.value).subscribe (//Realiza la función desde el homeServices
    (res)=> { 
    console.log('res', res);
  },
  (err)=> {
    console.log('err', err);
  });
  //console.log(form.value);
}

}
