import React from 'react';
import { Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../nav'
import Content from './content'

const useStyles = makeStyles( (theme) => ({ 

    root: {
        height: "100vh",
    },

    main: {
        height: "100vh",
        alignItems: "center"
    },

    cont_wrapper: {
        overflowX: "scroll",
        height: "30%",
        margin: "0"
    }



}))

function Homepage () {

    const classes = useStyles()

    return(
        <Grid   container
                className = {classes.root} 
                direction = "row">
            <Navbar></Navbar>

            <Grid container item className = {classes.main}> 

                <Grid   item
                        container
                        direction = "column"
                        xs = {12}
                        justify = "center"
                        alignItems = "center"
                        spacing = {2}
                        className = {classes.cont_wrapper}>
                            <Content></Content>
                </Grid>

            </Grid>
        </Grid>

    );
}

export default Homepage;