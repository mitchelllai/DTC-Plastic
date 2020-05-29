import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, TextField} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Alert from '../Redux/Alert';
import PropTypes from 'prop-types'

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

function Registration({setAlert, register}) {
  const classes = useStyles();
  const [formData, setFormData] = useState(

      {
          name: '',
          email: '',
          password: '',
          password2: '',

      }

  );

  const {name, email, password, password2} = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
      e.preventDefault();
      if (password !== password2) {
          setAlert('Passwords do not match', 'danger');
      } else {

        register({name, email, password});
        
      //     const newUser = {
      //         name,
      //         email,
      //         password
      //     }

      //     try{

      //       const config = {
      //           headers: {
      //               'Content-Type': 'application/json'
      //           }
      //       }

      //       const body = JSON.stringify(newUser);
      //       const res = await axios.post('/api/users', body, config);
      //       console.log(res.data);

      //     }catch(err){
      //       console.error(err.response.data);
      //     }
      }
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

        <form style = {{width: "100%", 
                        display: "flex", 
                        flexDirection: "column", 
                        justify: "center", 
                        alignItems: "center"}}
                        
                onSubmit = {e => onSubmit(e)}>

        <TextField className = {classes.textfield}
                    name = "name"
                    placeholder = "Name"
                    value = {name}
                    onChange = {e => onChange(e)}
                    variant = "outlined"></TextField>

        <TextField className = {classes.textfield}
                    name = "email"
                    placeholder = "Email"
                    value = {email}
                    onChange = {e => onChange(e)}
                    type = "email"
                    variant = "outlined"></TextField>

        <TextField className = {classes.textfield}
                    name = "password"
                    placeholder = "Password"
                    value = {password}
                    onChange = {e => onChange(e)}
                    type = "password"
                    variant = "outlined"></TextField>

        <TextField className = {classes.textfield}
                    name = "password2"
                    placeholder = "Confirm Password"
                    value = {password2}
                    onChange = {e => onChange(e)}
                    type = "password"
                    variant = "outlined"></TextField>

        <Button className = {classes.register_button}
                variant = "contained"
                type = "submit"
                // component = {Link}
                // to = {'/home'}
                >
          Register
        </Button>

        </form>

        <Button className = {classes.register_button}
                variant = "outlined"
                component = {Link}
                to = {'/'}>
          I already have an account
        </Button>

      </Grid>

    </Grid>
  );
}

Registration.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

export default connect(null, { setAlert, register })(Registration);