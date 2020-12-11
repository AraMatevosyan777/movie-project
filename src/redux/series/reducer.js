import { LOADING, SET_SERIES, SET_ERROR } from "./actions"

const initialState = {
    series: [],
    loading: false,
    error: false,
}

const seriesReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_SERIES:
            return {
                ...state,
                series: action.series,
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

export default seriesReducer