import { Comic } from "./interfaces/schema";

export interface AppState{
    readonly comic: Comic[];
    readonly comicFav: Comic[]
}