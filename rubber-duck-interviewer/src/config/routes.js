import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import QuestionSetIndex from '../pages/QuestionSetIndex/QuestionSetIndex'
import QuestionSetShow from '../pages/QuestionSetShow/QuestionSetShow'
import QuestionSetNew from '../pages/QuestionSetNew/QuestionSetNew'
import QuestionSetEdit from '../pages/QuestionSetEdit/QuestionSetEdit'
import QuestionSetDelete from '../pages/QuestionSetDelete/QuestionSetDelete'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import Logout from '../pages/Logout/Logout'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/questionSets/new' component={QuestionSetNew} />
        <Route path='/questionSets/:id/edit' component={QuestionSetEdit} />
        <Route path='/questionSets/:id/delete' component={QuestionSetDelete} />
        <Route path='/questionSets/:id' component={QuestionSetShow} />
        <Route path='/questionSets' component={QuestionSetIndex} />
        <Route path='/user/register' component={Register} />
        <Route path='/user/login' component={Login} />
        <Route path='/user/logout' component={Logout} />
    </Switch>
);

export default Routes;