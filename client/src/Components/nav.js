import React from 'react';
import { AppBar, Toolbar, IconButton, Grid, InputBase, Drawer } from '@material-ui/core'
import { makeStyles, fade } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu'
import SettingsIcon from '@material-ui/icons/Settings'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AccountCircle from '@material-ui/icons/AccountCircle'
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'
import PropTypes from 'prop-types'

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

function Navbar ( {logout} ) {

    const classes = useStyles();

    // if (!isAuthenticated){
    //     return( <Redirect to = '/'></Redirect>)
    // }

    return(
        <AppBar elevation = {0}
                className = {classes.app_bar}
                position = "static">
                <Toolbar>

                            <IconButton><MenuIcon></MenuIcon></IconButton>

                            <IconButton onClick = {logout}
                                        component = {Link}
                                        to = {'/'}><ExitToAppIcon></ExitToAppIcon></IconButton>

                            <IconButton component = {Link}
                                        to = {'/home'}><HomeIcon></HomeIcon></IconButton>

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

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);