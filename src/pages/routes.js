import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './Login/login';
import Feed from './Feed/feed';

function Routes(){
    return(
        <BrowserRouter>
        <Route path="/" exact component={Feed} />
        <Route path="/login" component={Login} />
        </BrowserRouter>
    )
}

export default Routes;