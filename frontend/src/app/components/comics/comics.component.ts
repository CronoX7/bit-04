import { Component, Input, OnInit } from '@angular/core';
import { Comic } from 'src/app/interfaces/schema';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit{
  comicSelected: Comic ={
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
  @Input ("comicData") comics : Comic[]=[]; 
  constructor (public homeService: HomeService){}
  ngOnInit(): void {
    
  }

  editModal(comic:any){ //Este método es el que recibe la información del Output hijo
    this.homeService.selectedComic = JSON.parse(JSON.stringify(comic));
    console.log(this.homeService.selectedComic);
    
    this.homeService.hideButton = false;
  }

    
  removeComic(id:string | any){
    console.log(id);  
    this.homeService.deleteComic(id).subscribe(
      (res)=>{
        this.comics = this.comics.filter(comic=>comic._id!=id);
        // this.getAllComics();
      },
      (err) => {
        console.log('err', err);
      }
    );

  }

  updateComic(){
    this.homeService.updateComic(this.homeService.selectedComic).subscribe(
      (res)=>{
        let comicFinded = this.comics.findIndex(comic=> comic._id == this.homeService.selectedComic._id);
        this.comics[comicFinded] = this.homeService.selectedComic;
      },
      (err) => {
        console.log('err', err);
      }
    )
  }

  deleteComic(event:Comic){
    console.log(event);
    this.comicSelected = event;
  }

}
