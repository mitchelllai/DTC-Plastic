import React from 'react';
import {Button, Grid, Paper, Typography, Avatar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './nav'
import willy from './willy.jpg'

const useStyles = makeStyles( (theme) => ({ 

    root: {
        height: "100vh",
    },

    main: {
        height: "100%",
        marginTop: "80px"
    }, 

    postsWrap: {
        maxWidth: "100%",
    },

    posts: {
        minHeight: "250px",
        overflowWrap: "break-word",
        overflowY: "scroll"
    },

    avatar: {
        height: "300px",
        width: "300px"
    },

    profile: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justify: "space-around",
        marginTop: "13px",
        backgroundColor: "#e0e0e0"

    },

    scrollingDiv: {
        overflow: "scroll"

    },

    profAction:{
        alignItems: "center",
    },

    score: {
        margin: "7px"
    }
    



}))

function Profile () {
    
    const classes = useStyles()

    return(
        <Grid   container
                className = {classes.root} 
                direction = "column">

            <Grid item> <Navbar></Navbar> </Grid>

            <Grid   container
                    item 
                    className = {classes.main}>
                        <Grid item
                            xs = {1}>
                        </Grid>
                        <Grid item
                            container
                            direction = "column"
                            justify = "flex-start"
                            spacing = {3}
                            className = {classes.scrollingDiv}
                            xs = {6}>
                                <Grid item className = {classes.postsWrap}><Paper variant = "outlined" className = {classes.posts}> <Typography variant = "body1"> Post 1</Typography></Paper></Grid>
                                <Grid item className = {classes.postsWrap}><Paper variant = "outlined" className = {classes.posts}> <Typography variant = "body1"> Post 2</Typography></Paper></Grid>
                                <Grid item className = {classes.postsWrap}><Paper variant = "outlined" className = {classes.posts}> <Typography variant = "body1"> Post 3</Typography></Paper></Grid>
                                <Grid item className = {classes.postsWrap}><Paper variant = "outlined" className = {classes.posts}> <Typography variant = "body1"> Post 4</Typography></Paper></Grid>
                                <Grid item className = {classes.postsWrap}><Paper variant = "outlined" className = {classes.posts}> <Typography variant = "body1"> Post 5</Typography></Paper></Grid>
                        </Grid>
                        <Grid item
                            xs = {1}>

                        </Grid>
                        <Grid item
                            container
                            direction = "column"
                            alignItems = "center"
                            spacing = {3}
                            xs = {4}>
                                <Grid   item
                                        container
                                        component = {Paper} 
                                        variant = "outlined"
                                        className = {classes.profile}
                                        spacing = {2}>
                                    <Grid item> <Avatar className = {classes.avatar}
                                                        src = {willy}> </Avatar> </Grid>

                                    <Grid item> <Typography variant = "h4"> Willy Wildcat </Typography></Grid>

                                    <Grid item> <Typography variant = "body1"> Hi! I'm Willy Wildcat! I see a lot of single-use plastic water bottles at Northwestern football games, and I'm here to change that! I'm scared of dogs! Northwestern 2023! </Typography></Grid>

                                    <Grid item container direction = "row" alignItems = "center" justify = "space-around"> 

                                    <Grid item> <Paper variant = "outlined"><Typography variant = "body2" className = {classes.score}> Sustainability Score: 5</Typography></Paper></Grid>
                                    <Grid item> <Button variant = "outlined"> Add Friend </Button></Grid>

                                    </Grid>
                                </Grid>
                        </Grid>


            </Grid>

        </Grid>
    );
}

export default Profile;