import thunk from "redux-thunk"
import {createStore, combineReducers, applyMiddleware } from "redux"
import seriesReducer from "./series/reducer"
import moviesReducer from "./movies/reducer"

const reducers = combineReducers({
    series: seriesReducer,
    movies: moviesReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store