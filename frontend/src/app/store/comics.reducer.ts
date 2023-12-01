import { createReducer, on } from "@ngrx/store";
import { adFavComics, delFavComic } from "./comics.actions";
import { Comic } from "../interfaces/schema";

const itemStore=localStorage.getItem('comicFav')
const stateIni:Comic[]=itemStore ?JSON.parse(itemStore):[]

export const reducerComic= createReducer(

    stateIni, on(adFavComics, (state, {comic})=> {
        const stateUpdate=[...state, comic]
        localStorage.setItem('comicFav', JSON.stringify(stateUpdate))
        return stateUpdate;
    }),
    on(delFavComic, (state,{_id}) => {

        const remFavComic=state.filter(remFavComic=>remFavComic._id!==_id)
        localStorage.setItem('comicFav', JSON.stringify (remFavComic))
        return remFavComic;

    })

)
