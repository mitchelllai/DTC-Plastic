import React from 'react';
import { Grid, Typography, TextField, Paper, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../nav'

const useStyles = makeStyles( (theme) => ({ 

    // root: {
    //     height: "100vh"
    // },

    main: {
        height: "100vh",
    },

    promptStyle: {
        padding: "20px",
        maxWidth: "100%",
    },

    postFieldStyle: {
        padding: "20px",
        width: "100%"
    },

    innerPostField: {
        width: "100%"
    },

    postWall: {
        width: "100%",
        padding: "20px",
    },

    posts: {
        width: "100%",
        height: "250px",
        display: "flex",
        flexDirection: "column",
        marginBottom: "15px"
    },

    avatarDiv: {
        maxWidth: "60px",
        height: "100%",
        padding: "10px"
    },

    postContent: {
        width: "90%",
        height: "100%",
        paddingTop: "10px"
    },

}))

function DailyPosts() {

    const classes = useStyles()

    return(
        <Grid   container
                className = {classes.root}>

            <Navbar></Navbar>
            <Grid   item
                    xs = {1}></Grid>
            <Grid   item
                    xs = {10}
                    container
                    direction = "row"
                    className = {classes.main}>

                <Grid   item
                        className = {classes.promptStyle}> 
                    <Typography variant = "h4">Identify a single-use plastic item and come up with a personal plan to reduce your usage.</Typography>
                </Grid>

                <Grid   item
                        className = {classes.postFieldStyle}>

                    <TextField  variant = "outlined"
                                multiline = {true}
                                rows = {5}
                                className = {classes.innerPostField}
                                placeholder = "Post your thoughts here...">
                                </TextField>

                    </Grid>

                <Grid   item
                        container
                        alignItems = "center"
                        className = {classes.postWall}>

                            <Grid   item 
                                    container 
                                    component = {Paper}
                                    variant = "outlined"
                                    className = {classes.posts}>

                                    <Grid   item
                                            container
                                            className = {classes.avatarDiv}>
                                                
                                                <Avatar></Avatar>

                                            </Grid>

                                    <Grid   item
                                            container
                                            className = {classes.postContent}>

                                                <Typography variant = "body1"> Insert Filler </Typography>

                                            </Grid>

                            </Grid>

                            <Grid   item 
                                    container 
                                    component = {Paper}
                                    variant = "outlined"
                                    className = {classes.posts}>

                                    <Grid   item
                                            container
                                            className = {classes.avatarDiv}>
                                                
                                                <Avatar></Avatar>

                                            </Grid>

                                    <Grid   item
                                            container
                                            className = {classes.postContent}>

                                                <Typography variant = "body1"> Insert Filler </Typography>

                                            </Grid>

                            </Grid>

                            <Grid   item 
                                    container 
                                    component = {Paper}
                                    variant = "outlined"
                                    className = {classes.posts}>

                                    <Grid   item
                                            container
                                            className = {classes.avatarDiv}>
                                                
                                                <Avatar></Avatar>

                                            </Grid>

                                    <Grid   item
                                            container
                                            className = {classes.postContent}>

                                                <Typography variant = "body1"> Insert Filler </Typography>

                                            </Grid>

                            </Grid>

                            <Grid   item 
                                    container 
                                    component = {Paper}
                                    variant = "outlined"
                                    className = {classes.posts}>

                                    <Grid   item
                                            container
                                            className = {classes.avatarDiv}>
                                                
                                                <Avatar></Avatar>

                                            </Grid>

                                    <Grid   item
                                            container
                                            className = {classes.postContent}>

                                                <Typography variant = "body1"> Insert Filler </Typography>

                                            </Grid>

                            </Grid>

                    </Grid>

            </Grid>

            <Grid   item
                    xs = {1}></Grid>

        </Grid>
    )


}

export default DailyPosts