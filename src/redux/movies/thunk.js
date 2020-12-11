import { loading, setMovies, setError } from "./actions"
import axios from 'axios'

export const getMovies = () => async(dispatch) => {
    try {
        dispatch(loading())
        const res = await axios.get("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json")
        const movies = res.data.entries
        .sort((a, b) => a.title.localeCompare(b.title, 'en', { numeric: true }))
        .filter(item => {
            if(item.programType === "movie" && item.releaseYear >= 2010 ){
                return true
            } return false
        })
        let size = 10;
        let subarray = [];
        for (let i = 0; i <Math.ceil(movies.length/size); i++){
            subarray[i] = movies.slice((i*size), (i*size) + size);
        }
        dispatch(setMovies(subarray))
        dispatch(loading())
    } catch (error) {
        dispatch(loading())
        dispatch(setError(!!error))
    }
}