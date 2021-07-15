import {
    GENRES,
    SET_GANRE,
    MOVIES,
    SET_MOVIE_ID,
    CURRENT_PAGE,
    ALL_PAGES
} from '../actionTypes';

export const setListGenres = (payload) => ({type: GENRES, payload})
export const setGenre = (payload) => ({type: SET_GANRE, payload})
export const setListMovies = (payload) => ({type: MOVIES, payload})
export const setMovieId = (payload) => ({type: SET_MOVIE_ID, payload})
export const setCurrentPage = (payload) => ({type: CURRENT_PAGE, payload})
export const setAllPages = (payload) => ({type: ALL_PAGES, payload})

