import React from 'react'
import {Pagination as Pgnt} from '@material-ui/lab';

const Pagination = ({pages, onPageChange}) => {
    const style = {
        marginBottom: '20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    }

    return (
        <div style={style}>
            <Pgnt count={pages} variant="outlined" shape="rounded" onChange={onPageChange}/>
        </div>
    )
}

export default Pagination
