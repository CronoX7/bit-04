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
  hideButton: boolean=true;
  
  selectedComic: Comic ={
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

  createComic(comic: Comic){
    //console.log(comic);
    return this.http.post(this.urlBackend, comic);
  }

  
  readAllComic(){
    return this.http.get(this.urlBackend)

  }

  readComics(criteria:string){
    const newUrl = this.urlBackend+"/filter/"+criteria;
    return this.http.get<any> (newUrl);
  }
  

  updateComic(comic:any){
    const newUrl = this.urlBackend+"/"+comic._id
    return this.http.put(newUrl, comic);

  }


  deleteComic(id:string){
    return this.http.delete(`${this.urlBackend}/${id}`)
  }
  
}


