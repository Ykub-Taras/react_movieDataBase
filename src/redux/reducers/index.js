import {combineReducers} from "redux";
import {genres} from "./genres";
import {movies} from "./movies";
import {pagination} from "./pagination";

export const rootReducer = combineReducers({
    genres,
    movies,
    pagination
})
