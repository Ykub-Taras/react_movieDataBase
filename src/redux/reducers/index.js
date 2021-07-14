import {combineReducers} from "redux";
import {genres} from "./genres";
import {movies} from "./movies";

export const rootReducer = combineReducers({
    genres,
    movies
})
