import { ColdObservable } from "rxjs/internal/testing/ColdObservable";

export class Comic{
    constructor(_id: string, pubHouse: string, name: string, mainCharacter: string, storyArc: string, numPages: number, cover: string, format: string, price: number, imgComic: string){
        this._id = _id;
        this.pubHouse=pubHouse;
        this.name= name; 
        this.mainCharacter= mainCharacter; 
        this.storyArc= storyArc; 
        this.numPages=numPages;
        this.cover=cover;
        this.format=format;
        this.price=price; 
        this.imgComic=imgComic;       
  
    }
    _id?:any;
    pubHouse: string;
    name: string;
    mainCharacter: string;
    storyArc: string;
    numPages: number;
    cover: string
    format: string;
    price: number;
    imgComic: string;
 
}