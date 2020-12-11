export const LOADING = 'LOADING'
export const SET_MOVIES = 'SET_MOVIES'
export const SET_ERROR = 'SET_ERROR'

export const loading = () => ({type: LOADING})
export const setMovies = (movies) => ({type: SET_MOVIES, movies})
export const setError = (error) => ({type: SET_ERROR, error})