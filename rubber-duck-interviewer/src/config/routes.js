import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/profile' component={Profile} />
    </Switch>
);