import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Wrapper from "./layout/Wrapper";
import Navbar from "./components/navbar/Navbar";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Wrapper>
            <Navbar />
            <Header></Header>
            <Routes />
            <Footer>footer text</Footer>
          </Wrapper>
        </Router>
      </div>
    );
  }
}

export default App;
