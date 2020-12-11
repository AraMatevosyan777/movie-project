import { loading, setError, setSeries } from "./actions"
import axios from 'axios'

export const getSeries = () => async(dispatch) => {
    try {
        dispatch(loading())
        const res = await axios.get("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json")
        const series = res.data.entries
        .sort((a, b) => a.title.localeCompare(b.title, 'en', { numeric: true }))
        .filter(item => {
            if(item.programType === "series" && item.releaseYear >= 2010 ){
                return true
            }
        })
        let size = 10;
        let subarray = [];
        for (let i = 0; i <Math.ceil(series.length/size); i++){
            subarray[i] = series.slice((i*size), (i*size) + size);
        }
        dispatch(setSeries(subarray))
        dispatch(loading())
    } catch (error) {
        dispatch(loading())
        dispatch(setError(!!error))
    }
}