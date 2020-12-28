import React, { Fragment } from 'react'
import Landingpage from '../pages/LandingPage/LandingPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Profilepage from '../pages/Profilepage'

export const Routes = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path='/' component={Landingpage} exact />
                    <Route path='/home' component={Homepage} exact />
                    <Route path='/profile' component={Profilepage} />
                </Switch>
            </Router>
        </Fragment>
    )
}

