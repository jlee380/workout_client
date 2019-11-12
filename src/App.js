import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Wrapper from './layout/Wrapper';
import Navbar from './components/navbar/Navbar';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Routers from './Routers';

// import 'bootstrap/dist/css/bootsrap.min.css';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Router>
                    <Wrapper>
                        <Navbar />
                        <Header></Header>
                        <Routers />
                        <Footer>footer text</Footer>
                    </Wrapper>
                </Router>
            </div>
        );
    }
}

export default App;
