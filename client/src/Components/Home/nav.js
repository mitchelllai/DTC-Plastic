import React from 'react';
import { AppBar, Toolbar, IconButton, Grid, InputBase, Drawer } from '@material-ui/core'
import { makeStyles, fade } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu'
import SettingsIcon from '@material-ui/icons/Settings'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { Link } from 'react-router-dom'

const useStyles = makeStyles( (theme) => ({

    break: {
        flexGrow: 1,
    },

    app_bar: {
        backgroundColor: "#9dfee7ff",
    },

    search_bar: {
        position: "relative",
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    }




}))

function Navbar () {

    const classes = useStyles();

    return(
        <AppBar elevation = {0}
                className = {classes.app_bar}>
                <Toolbar>

                            <IconButton><MenuIcon></MenuIcon></IconButton>

                            <Grid item className = {classes.break}></Grid>

                            <InputBase  variant = "filled"
                                        placeholder = "Search..."
                                        size = "small"
                                        className = {classes.search_bar}> </InputBase>

                            <Grid item className = {classes.break}></Grid>

                            <IconButton><NotificationsIcon></NotificationsIcon></IconButton>
                            <IconButton><SettingsIcon></SettingsIcon></IconButton>
                            <IconButton component = {Link}
                                        to = {'/profile'}><AccountCircle></AccountCircle></IconButton>

                </Toolbar>
        </AppBar>
    )



}

export default Navbar;