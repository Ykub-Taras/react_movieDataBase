import {
    CURRENT_PAGE,
    ALL_PAGES,
} from '../actionTypes'

const initialState = {
    currentPage: null,
    allPages: null,

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