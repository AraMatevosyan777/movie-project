import { LOADING, SET_ERROR, SET_MOVIES } from "./actions"

const initialState = {
    movies: [],
    loading: false,
    error: false,
}

const moviesReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_MOVIES:
            return {
                ...state,
                movies: action.movies,
                error: false,
            }
        case LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }

        default: return state
    }
}

export default moviesReducer