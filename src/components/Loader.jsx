import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 0'
    },
  }));

const Loader = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <CircularProgress color='inherit'/>
        </div>
    )
}

export default Loader
