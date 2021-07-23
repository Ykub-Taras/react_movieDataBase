import {GENRES, SET_GANRE,} from '../actionTypes'

const initialState = {
    listGenres: [],
    setGenre: [],
}

export const genres = (state = initialState, action) => {
    switch (action.type) {
        case GENRES: {
            return {...state, listGenres: action.payload}
        }
        case SET_GANRE: {
            return {...state, setGenre: action.payload}
        }
        default:
            return state
    }
}