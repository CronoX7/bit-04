import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HomeService } from "../../services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(public homeService: HomeService){}
  
  

addComic(form: NgForm){
  this.homeService.createComic(form.value).subscribe (//Realiza la función desde el homeServices
    (res)=> { 
    console.log('res', res);
  },
  (err)=> {
    console.log('err', err);
  });
  console.log(form.value);
}




}