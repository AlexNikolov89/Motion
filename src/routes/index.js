import React, { Fragment } from 'react'
import Landingpage from '../pages/LandingPage/LandingPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Profilepage from '../pages/Profilepage'
import {authHOC} from '../HOC/authHoc'
import SignUp from '../components/SignUp/SignUp';
import FindFriensPage from '../components/FindFriends/FindFriensPage';

export const Routes = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path='/' component={Landingpage} exact />
                    <Route path='/homepage' component={Homepage} exact />
                    <Route path='/homepage/friends' component={FindFriensPage} />
                    <Route path='/profile' component={Profilepage} />
                </Switch>
            </Router>
        </Fragment>
    )
}

