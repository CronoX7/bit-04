import { createAction, props } from "@ngrx/store";
import { Comic } from "../interfaces/schema";

export const adFavComics=createAction('[comicComponent] añade comic a favoritos', 
props <{comic:Comic}>())

export const delFavComic=createAction('[comicComponent] elimina comic de favoritos',
props <{_id:any}> ()) 