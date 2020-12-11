export const LOADING = 'series/LOADING'
export const SET_SERIES = 'series/SET_SERIES'
export const SET_ERROR = 'series/SET_ERROR'

export const loading = () => ({type: LOADING})
export const setSeries = (series) => ({type: SET_SERIES, series})
export const setError = (error) => ({type: SET_ERROR, error})