import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import QuestionSetIndex from '../pages/QuestionSetIndex/QuestionSetIndex'
import QuestionSetShow from '../pages/QuestionSetShow/QuestionSetShow'
import QuestionSetNew from '../pages/QuestionSetNew/QuestionSetNew'
import QuestionSetEdit from '../pages/QuestionSetEdit/QuestionSetEdit'
import QuestionSetDelete from '../pages/QuestionSetDelete/QuestionSetDelete'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/questionSets/new' component={QuestionSetNew} />
        <Route path='/questionSets/:id/edit' component={QuestionSetEdit} />
        <Route path='/questionSets/:id/delete' component={QuestionSetDelete} />
        <Route path='/questionSets/:id' component={QuestionSetShow} />
        <Route path='/questionSets' component={QuestionSetIndex} />
    </Switch>
);

export default Routes;