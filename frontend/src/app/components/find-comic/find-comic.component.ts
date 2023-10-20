import { Component } from '@angular/core';
import { Comic } from 'src/app/interfaces/schema';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-find-comic',
  templateUrl: './find-comic.component.html',
  styleUrls: ['./find-comic.component.css']
})
export class FindComicComponent {
  idComic: string="";
  
  oneComic: Comic[]=[];

  constructor (public homeService: HomeService){}

  findComic(){
    this.oneComic  = [];
    this.homeService.readComics(this.idComic).subscribe(
      (res:any)=>{                
        if(res.comic.length>0){
          this.oneComic= (res.comic);
        }else{
          alert ("El comic no fue encontrado")
        }

      },
      (err)=>{ 
        console.log('err', err);
      }
    );
    
    
  }

}
