import React, {Fragment, useEffect } from 'react';
import '@material-ui/core';
import Login from './Components/Login/login';
import Homepage from './Components/Home/home'
import Registration from './Components/Registration/registration'
import Profile from './Components/Profile/profile'
import DailyPosts from './Components/Posts/postpage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from 'react-redux';
import store from './store';
import Alert from './Components/Redux/Alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

function App() {

    useEffect( () => {
        store.dispatch(loadUser());
    })

    return(
        <Provider store = {store}>
        <Router>
            <Fragment>
                <Switch>

                    <Route exact path = '/' component={Login}> 

                        </Route>

                    <Route exact path = "/home" component = {Homepage}>

                        </Route>
                    
                    <Route exact path = "/register" component = {Registration}>

                        </Route>

                    <Route exact path = "/profile" component = {Profile}>

                        </Route>

                    <Route exact path = "/dailyposts" component = {DailyPosts}>

                        </Route>

                </Switch>
            </Fragment>
        </Router>
        </Provider>
    );
}

export default App