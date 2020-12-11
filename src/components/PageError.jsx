import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ErrorIcon from '@material-ui/icons/Error';
import { Button, CardActions } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory  } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '60%',
        height: '300px',
        boxShadow: '0px 0px 10px 5px #ddd',
        borderRadius: '10px',
    },
    content: {
        width: '100%',
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0',
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
    },
});

const PageError = ({getData}) => {
    const classes = useStyles();
    let history = useHistory();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <ErrorIcon color="action" fontSize="large" style={{marginRight: '10px'}}/>
                <Typography variant='h5' color="textSecondary">
                    Something Wrong
                </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
                <Button onClick={()=> history.push("/")} startIcon={<ArrowBackIosIcon/>} color="primary" size="small">Home</Button>
                <Button onClick={()=> getData()} color="primary" size="small">Try again</Button>
            </CardActions>
        </Card>
    )
}

export default PageError
