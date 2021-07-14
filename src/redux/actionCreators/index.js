import {
    GENRES,
    SET_GANRE,
    MOVIES,
    SET_MOVIE_ID,
} from '../actionTypes';

export const setListGenres = (payload) => ({type: GENRES, payload})
export const setGenre = (payload) => ({type: SET_GANRE, payload})

export const setListMovies = (payload) => ({type: MOVIES, payload})


export const setMovieId = (payload) => ({type: SET_MOVIE_ID, payload})

