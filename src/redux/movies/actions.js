export const LOADING = 'movies/LOADING'
export const SET_MOVIES = 'movies/SET_MOVIES'
export const SET_ERROR = 'movies/SET_ERROR'

export const loading = () => ({type: LOADING})
export const setMovies = (movies) => ({type: SET_MOVIES, movies})
export const setError = (error) => ({type: SET_ERROR, error})