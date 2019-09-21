import React from 'react';
import Wrapper from './layout/Wrapper';
import Navbar from './components/navbar/Navbar';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Gym from './components/Gym';
import User from './components/User';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// import 'bootstrap/dist/css/bootsrap.min.css';

function App() {
    return (
        <div className='app'>
            <Router>
                <Navbar />
                <br />
                <Wrapper>
                    <Header>
                        <h1>My portfolio</h1>
                        <p>Find your workout partners</p>
                    </Header>
                    <Route path='/gym' exact component={Gym} />
                    <Route path='/user' exact component={User} />
                </Wrapper>
                <Footer>footer text</Footer>
            </Router>
        </div>
    );
}

export default App;
