import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HomeService } from "../../services/home.service";

@Component({
  selector: 'app-add-comic',
  templateUrl: './add-comic.component.html',
  styleUrls: ['./add-comic.component.css']
})
export class AddComicComponent implements OnInit {
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
