import {LANGUAGE,} from '../actionTypes'

const initialState = {
    listLanguages: 'en-US',
}

export const language = (state = initialState, action) => {
    console.log(state, action)
    switch (action.type) {
        case LANGUAGE: {
            return {...state, listLanguages: action.payload}
        }
        default:
            return state
    }
}