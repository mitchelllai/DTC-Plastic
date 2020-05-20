import React from 'react';
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './nav'

const useStyles = makeStyles( (theme) => ({ 

    root: {
        height: "100vh",
    },

    main: {
        height: "100%"
    }

}))

function Profile () {
    
    const classes = useStyles()

    return(
        <Grid   container
                className = {classes.root} 
                direction = "column">

            <Grid item> <Navbar> </Navbar> </Grid>

            <Grid   container
                    item 
                    className = {classes.main}>
                        <Grid item
                            xs = {1}>

                        </Grid>
                        <Grid item
                            xs = {6}>

                        </Grid>
                        <Grid item
                            xs = {1}>

                        </Grid>
                        <Grid item
                            xs = {4}>

                        </Grid>


            </Grid>

        </Grid>
    );
}

export default Profile;