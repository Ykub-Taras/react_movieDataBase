import {
    MOVIES,
    SET_MOVIE_ID,

} from '../actionTypes'

const initialState = {
    listMovies: [],
    setMovieId: [],

}

export const movies = (state = initialState, action) => {
    switch (action.type) {
        case MOVIES: {
            return {...state, listMovies: action.payload}
        }
        case SET_MOVIE_ID: {
            return {...state, setMovieId: action.payload}
        }
        default:
            return state
    }
}