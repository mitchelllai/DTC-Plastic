import React from 'react';
import '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, TextField} from '@material-ui/core';
import { Link } from 'react-router-dom'

import image from "./turtles.gif"

const useStyles = makeStyles( (theme) => ({ 

  root: {
    height: "100vh",
    width: "100vw",
    flexDirection: "row",
  },

  right_div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  left_div: {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  register_button: {
    //Add custom CSS for register button
    margin: theme.spacing(3),
  },
  
  login_button: {
    //Add custom CSS for login button
    margin: theme.spacing(3),
  },

  forgotpass: {
      //Add custom CSS for forgot password button
    margin: theme.spacing(3),
  },

  textfield:{
    margin: theme.spacing(3),
    width: "75%"
  },



}))

function Login() {
  const classes = useStyles();

  return (
    <Grid container
            xs = {12}
            className = {classes.root}
    >

      <Grid item 
            container
            xs = {false}
            s = {4}
            md = {8}
            lg = {8}
            className = {classes.left_div}>
      </Grid>


      <Grid item xs = {12}
                  s = {8}
                  md = {4}
                  lg = {4}
                  className = {classes.right_div}>

        <TextField className = {classes.textfield}
                    placeholder = "Email"
                    type = "email"
                    variant = "outlined"></TextField>

        <TextField className = {classes.textfield}
                    placeholder = "Password"
                    type = "password"
                    variant = "outlined"></TextField>

        <Button className = {classes.button}
                variant = "contained"
                component = {Link}
                to = {'/home'}>
          Login
        </Button>

        <Button className = {classes.forgotpass}
                variant = "text">
          Forgot password?
        </Button>

        <Button className = {classes.register_button}
                variant = "outlined"
                component = {Link}
                to = {'/register'}>
          Register
        </Button>
      </Grid>

    </Grid>
  );
}

export default Login;
