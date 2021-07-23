import {ALL_PAGES, CURRENT_PAGE,} from '../actionTypes'

const initialState = {
    currentPage: 1,
    allPages: 1,

}

export const pagination = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_PAGE: {
            return {...state, currentPage: action.payload}
        }
        case ALL_PAGES: {
            return {...state, allPages: action.payload}
        }
        default:
            return state
    }
}