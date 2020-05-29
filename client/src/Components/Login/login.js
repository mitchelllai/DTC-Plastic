import React, {useState} from 'react';
import '@material-ui/core';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { Grid, Button, TextField, Typography} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { login } from '../../actions/auth'
import PropTypes from 'prop-types'
import Alert from '../Redux/Alert';
import Lobster from './Lobster-Regular.ttf';

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

}));


function Login( {login, isAuthenticated} ) {
  const classes = useStyles();

  const [formData, setFormData] = useState ({
    email: '',
    password: ''
  });

  const {email, password} = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
      e.preventDefault();
      login(email, password);
  };

  if(isAuthenticated) {
    return <Redirect to = '/home'></Redirect>
  }

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

        <Alert/>

        <Typography variant = "h2" style = {{marginBottom: "30px"}}> Sustainably </Typography>

        <form style = {{width: "100%", 
                        display: "flex", 
                        flexDirection: "column", 
                        justify: "center", 
                        alignItems: "center"}}
              onSubmit = {e => onSubmit(e)}>            

        <TextField className = {classes.textfield}
                    name = "email"
                    placeholder = "Email"
                    type = "email"
                    value = {email}
                    onChange = {e => onChange(e)}
                    variant = "outlined"></TextField>

        <TextField className = {classes.textfield}
                    name = "password"
                    placeholder = "Password"
                    type = "password"
                    value = {password}
                    onChange = {e => onChange(e)}
                    variant = "outlined"></TextField>

        <Button className = {classes.button}
                variant = "contained"
                type = "submit">
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
        </form>
      </Grid>

    </Grid>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
