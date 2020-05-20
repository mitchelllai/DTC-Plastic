import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './nav'

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
    }

}))

function Profile () {
    
    const classes = useStyles()

    return(
        <Grid   container
                className = {classes.root} 
                direction = "column">

            <Grid item><Navbar> </Navbar></Grid>

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
                            xs = {6}>
                                <Grid item className = {classes.postsWrap}><Paper variant = "outlined" className = {classes.posts}> <Typography variant = "body1"> Filler Text. I am inserting a lot of filler text here. I need to inswert more filler text tot est the wraparound compoonent, so i can go to sleep easy tonight. This will act as my post card, so being able to put text here is very important</Typography></Paper></Grid>
                                <Grid item className = {classes.postsWrap}><Paper variant = "outlined" className = {classes.posts}> <Typography variant = "body1"> Imagine some sustainability content here </Typography></Paper></Grid>
                                <Grid item className = {classes.postsWrap}><Paper variant = "outlined" className = {classes.posts}> <Typography variant = "body1"> Here too</Typography></Paper></Grid>
                                <Grid item className = {classes.postsWrap}><Paper variant = "outlined" className = {classes.posts}> <Typography variant = "body1"> Filler Text. I am inserting a lot of filler text here. I need to inswert more filler text tot est the wraparound compoonent, so i can go to sleep easy tonight. This will act as my post card, so being able to put text here is very important</Typography></Paper></Grid>
                                <Grid item className = {classes.postsWrap}><Paper variant = "outlined" className = {classes.posts}> <Typography variant = "body1"> Filler Text. I am inserting a lot of filler text here. I need to inswert more filler text tot est the wraparound compoonent, so i can go to sleep easy tonight. This will act as my post card, so being able to put text here is very important</Typography></Paper></Grid>
                                <Grid item className = {classes.postsWrap}><Paper variant = "outlined" className = {classes.posts}> <Typography variant = "body1"> Filler Text. I am inserting a lot of filler text here. I need to inswert more filler text tot est the wraparound compoonent, so i can go to sleep easy tonight. This will act as my post card, so being able to put text here is very important</Typography></Paper></Grid>
                                <Grid item><Paper className = {classes.posts}> <Typography variant = "body1"> Filler Text </Typography></Paper></Grid>
                                <Grid item><Paper className = {classes.posts}> <Typography variant = "body1"> Filler Text </Typography></Paper></Grid>
                                <Grid item><Paper className = {classes.posts}> <Typography variant = "body1"> Filler Text </Typography></Paper></Grid>
                        </Grid>
                        <Grid item
                            xs = {1}>

                        </Grid>
                        <Grid item
                            container
                            xs = {4}>

                        </Grid>


            </Grid>

        </Grid>
    );
}

export default Profile;