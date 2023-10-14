import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/interfaces/schema';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit{
  comics: Comic[]=[];
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
  showModalEdit = false;
  constructor (public homeService: HomeService){}
  ngOnInit(): void {
    this.getAllComics();
  }

  modal(comic:any){
    this.comicSelected = comic; 
    this.showModalEdit = true;
  }

  getAllComics(){
    this.homeService.readAllComic().subscribe(
      (res:any)=>{
        console.log('res', res);
        this.comics=res.allComics;
        console.log(this.comics);
      },
      (err)=>{
        console.log('err', err);
      }      
    );
  }
  
  removeComic(id:string | any){
    console.log(id);  
    this.homeService.deleteComic(id).subscribe(
      (res)=>{
        this.getAllComics();
      },
      (err) => {
        console.log('err', err);
      }
    );

  }

  updateComic(){
    this.homeService.updateComic(this.homeService.selectedComic).subscribe(
      (res)=>{
        this.getAllComics();
      },
      (err) => {
        console.log('err', err);
      }
    )
  }


}
