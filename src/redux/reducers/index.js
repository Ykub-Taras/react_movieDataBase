import {combineReducers} from "redux";
import {genres} from "./genres";
import {movies} from "./movies";
import {pagination} from "./pagination";
import {language} from "./language";
import {search} from "./search";

export const rootReducer = combineReducers({
    genres,
    movies,
    pagination,
    language,
    search
})
