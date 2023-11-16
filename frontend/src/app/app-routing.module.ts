import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ComicsComponent } from './components/comics/comics.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddComicComponent } from './components/add-comic/add-comic.component';
import { AllComicsComponent } from './components/all-comics/all-comics.component';
import { FindComicComponent } from './components/find-comic/find-comic.component';
import { SaveComicComponent } from './components/save-comic/save-comic.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'comics', component: AllComicsComponent},
  {path: 'addComic', component: SaveComicComponent},
  {path: 'findComic', component: FindComicComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
