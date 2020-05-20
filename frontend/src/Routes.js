import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Companies from './Companies';
import Company from './Company';
import Home from './Home';
import Jobs from './Jobs';
import Login from './Login';
import Profile from './Profile';
import PrivateRoute from './PrivateRoute';
import Applications from './Applications';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <PrivateRoute exact path="/companies">
                <Companies />
            </PrivateRoute>
            <PrivateRoute exact path="/companies/:handle">
                <Company />
            </PrivateRoute>
            <PrivateRoute exact path="/jobs">
                <Jobs />
            </PrivateRoute>
            <PrivateRoute exact path="/profile">
                <Profile />
            </PrivateRoute>
            <PrivateRoute exact path="/applications">
                <Applications />
            </PrivateRoute>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes;