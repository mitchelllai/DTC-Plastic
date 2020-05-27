import React, {Fragment} from 'react';
import '@material-ui/core';
import Login from './Components/Login/login';
import Homepage from './Components/Home/home'
import Registration from './Components/Registration/registration'
import Profile from './Components/Profile/profile'
import DailyPosts from './Components/Posts/postpage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return(
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
    );
}

export default App