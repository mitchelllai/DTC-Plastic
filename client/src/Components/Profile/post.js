import React from 'react';
import {Button, Grid, Paper, Typography, Avatar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( (theme) => ({ 

    posts: {
        minHeight: "250px",
        overflowWrap: "break-word",
        overflowY: "scroll"
    }, 

}))

function Post () {

    const classes = useStyles()

    return (

        <Paper variant = "outlined" className = {classes.posts}> </Paper>

    )
}