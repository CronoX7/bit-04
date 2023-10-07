import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Comic } from "../interfaces/schema"; 

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private http: HttpClient) { }


  urlBackend ='http://localhost:4000/comics';
  comics: Comic[] = [];
  
  selectedComic: Comic ={
    pubHouse: "",
    name: "",
    mainCharacter: "",
    storyArc: "",
    numPages: 0,
    cover: "",
    format: "",
    price: 0
  }

  createComic(comic: Comic){
    //console.log(comic);
    return this.http.post(this.urlBackend, comic);
  }

  
  readAllComic(){
    return this.http.get(this.urlBackend)

  }


  updateComic(){}
  dleteComic(){}
  
}


