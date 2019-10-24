import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import fire from 'config/firebase';

import Wrapper from './layout/Wrapper';
import Navbar from './components/navbar/Navbar';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Gym from './components/partner/Gym';
import User from './components/partner/User';
import Partner from './components/partner/Partner';
import Signup from './components/signup/Signup';
import Home from './components/Home';

// import 'bootstrap/dist/css/bootsrap.min.css';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Router>
                    <Wrapper>
                        <Navbar />
                        <Header></Header>
                        <Route path='/' exact component={Home} />
                        <Route path='/partner' component={Partner} />
                        <Route path='/gym' component={Gym} />
                        <Route path='/user' component={User} />
                        <Route path='/signup' component={Signup} />
                        <Footer>footer text</Footer>
                    </Wrapper>
                </Router>
            </div>
        );
    }
}

export default App;
