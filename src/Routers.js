import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import Gym from './components/partner/Gym';
import User from './components/partner/User';
import Partner from './components/partner/Partner';
import Signup from './components/signup/Signup';
import Home from './components/Home';
import UserProfileDetail from 'components/partner/UserProfileDetail';

const Routers = ({ match, location }) => {
    return (
        <>
            <Route path='/' exact component={Home} />
            <Route path='/partner' component={Partner} />
            <Route path='/gym' component={Gym} />
            <Route path='/user' component={User} />
            <Route path='/signup' component={Signup} />
            <Route path='/partner/:uid' component={UserProfileDetail} />
        </>
    );
};

export default withRouter(Routers);
