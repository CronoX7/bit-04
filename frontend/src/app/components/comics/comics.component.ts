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
  constructor (public homeService: HomeService){}
  ngOnInit(): void {
    this.getAllComics();
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


}
