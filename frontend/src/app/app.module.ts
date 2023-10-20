import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"; //Se debe importar este módulo para poder usar formularios en Angular.


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ComicsComponent } from './components/comics/comics.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TopComponent } from './components/top/top.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComicComponent } from './components/add-comic/add-comic.component';
import { CardComicComponent } from './components/card-comic/card-comic.component';
import { AllComicsComponent } from './components/all-comics/all-comics.component';
import { FindComicComponent } from './components/find-comic/find-comic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ComicsComponent,
    PageNotFoundComponent,
    TopComponent,
    BottomComponent,
    AddComicComponent,
    CardComicComponent,
    AllComicsComponent,
    FindComicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
