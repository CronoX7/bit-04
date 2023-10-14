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
  
  ngOnInit(): void{ // Hace que se ejecuten todas las tareas cuando inicie.
    this.getAllComics();
  }

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

getAllComics(){
  this.homeService.readComics().subscribe(
    (res) =>{
      this.homeService.comics = res.allComics;
    },
    (err) => {
      console.log('err', err);
    }
  )
}

removeComic(id:string | any){
  this.homeService.deleteComic(id).subscribe(
    (res)=>{
      this.getAllComics();
    },
    (err) => {
      console.log('err', err);
    }
  );
}

handleSubmitComic(form: NgForm){

}

}