import React from 'react';
import {Button, Grid, Paper, Typography, Avatar, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../nav'
import willy from './willy.jpg'
import postcontent from './cookietube.png'

const useStyles = makeStyles( (theme) => ({ 

    root: {
        height: "100vh",
    },

    main: {
        height: "100%",
        marginTop: "20px"
    }, 

    postsWrap: {
        maxWidth: "100%",
    },

    posts: {
        minHeight: "250px",
        width: "100%",
        overflowWrap: "break-word",
        overflowY: "scroll",
        // backgroundColor: "#e0e0e0"
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
        // backgroundColor: "#e0e0e0"

    },

    scrollingDiv: {
        overflow: "scroll"

    },

    profAction:{
        alignItems: "center",
    },

    score: {
        margin: "7px"
    },

    promptStyle:{
        margin: "10px"
    },

    postStyle:{
        margin: "10px"
    },

    media: {
        // width: "100%",
        marginTop: "20px",
        marginBottom: "20px",
    }

}))

function Profile () {
    
    const classes = useStyles()

    return(
        <Grid   container
                className = {classes.root} 
                direction = "row">

            <Navbar></Navbar>

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
                                <Grid item className = {classes.postsWrap}><Paper variant = "outlined" className = {classes.posts}> 
                                    <Typography variant = "body1" > <Box fontWeight = "fontWeightBold" className = {classes.promptStyle}>Identify a single plastic item and come up with a personal plan to reduce your usage.</Box></Typography>
                                    <Typography variant = "body1" className = {classes.postStyle}> It hurts to see all the single-use plastic water bottles and cups at Northwestern football games. However, I also use these items at home often without thinking about it. I intend buy a reusable water bottle for myself, and I want to talk to the people at Ryan Field about my concern.</Typography>
                                    </Paper>
                                    </Grid>
                                <Grid item className = {classes.postsWrap} container><Paper variant = "outlined" className = {classes.posts}> 
                                    <Typography variant = "body1" > <Box fontWeight = "fontWeightBold" className = {classes.promptStyle}>What is a creative replacement for a commonly-abused single-use plastic item?</Box></Typography>
                                    <Typography variant = "body1" className = {classes.postStyle}> I want to replace plastic cookie clamshells! Look at what I hacked together! What if... we put cookies in a Pringles tube!?</Typography>
                                    <Grid item container justify = "center" className = {classes.media}><img src = {postcontent}></img></Grid>
                                    </Paper>
                                    </Grid>
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

                                    <Grid item> <Paper variant = "outlined" ><Typography variant = "body2" className = {classes.score} > Sustainability Score: 2</Typography></Paper></Grid>
                                    <Grid item> <Button variant = "outlined"> Add Friend </Button></Grid>

                                    </Grid>
                                </Grid>
                        </Grid>


            </Grid>

        </Grid>
    );
}

export default Profile;