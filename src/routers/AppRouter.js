import React from 'react';

import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import ReactForm from '../components/ReactForm';
import About from '../components/rest/About';
import Help from '../components/rest/Help';
import Firebase from '../components/rest/Firebase';
import FirebaseQuery from '../components/rest/FirebaseQuery';
import Login from "../components/Login";


export const history = createBrowserHistory();

const AppRouter = () => (

    <Router history={history}>
        <div>


            <Switch>
            <PublicRoute path="/" component={Login} exact={true} />
            <PrivateRoute path="/reactform" component={ReactForm}  />
            <PrivateRoute path="/about" component={About}  />
            <PrivateRoute path="/help/:id" component={Help} />
            <PrivateRoute path="/firebase" component={Firebase} />
            <PrivateRoute path="/firebasequery" component={FirebaseQuery} />
            </Switch>
        </div>
    </Router>
);
export default AppRouter;
