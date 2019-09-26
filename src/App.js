import React from 'react';
import Wrapper from './layout/Wrapper';
import Navbar from './components/navbar/Navbar';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Gym from './components/partner/Gym';
import User from './components/partner/User';
import Partner from './components/partner/Partner';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';

// import 'bootstrap/dist/css/bootsrap.min.css';

function App() {
    return (
        <div className='app'>
            <Router>
                <Wrapper>
                    <Navbar />
                    <br />
                    <Header></Header>
                    <Route path='/' exact component={Home} />
                    <Route path='/partner' component={Partner} />
                    <Route path='/gym' component={Gym} />
                    <Route path='/user' component={User} />
                    <Footer>footer text</Footer>
                </Wrapper>
            </Router>
        </div>
    );
}

export default App;
