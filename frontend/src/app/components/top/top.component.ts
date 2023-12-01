import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Comic } from 'src/app/interfaces/schema';
import { delFavComic } from 'src/app/store/comics.actions';





@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {
comic: Comic[]=[]

  constructor(
    public loginService: LoginService, private store: Store<AppState>
    ){}

    ngOnInit(): void {
      this.store.pipe(select('comicFav')).subscribe((comic: Comic[])=>{
        this.comic=comic
      })
      
    }
  
    deleteFavComic(_id: number){
      this. store.dispatch(delFavComic({_id}))
    }

}
