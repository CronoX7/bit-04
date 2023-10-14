import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HomeService } from "../../services/home.service";

@Component({
  selector: 'app-add-comic',
  templateUrl: './add-comic.component.html',
  styleUrls: ['./add-comic.component.css']
})
export class AddComicComponent implements OnInit {
  @Input("comic") comic:any;
  constructor(public homeService: HomeService){}  
  ngOnInit(): void {
    if(this.comic){
      this.homeService.selectedComic=this.comic;
    }
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
