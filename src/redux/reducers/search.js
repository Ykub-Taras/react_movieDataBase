import {SEARCH,} from '../actionTypes'

const initialState = {
    searchItem: '',
}

export const search = (state = initialState, action) => {
    console.log(state, action)
    switch (action.type) {
        case SEARCH: {
            return {...state, searchItem: action.payload}
        }
        default:
            return state
    }
}