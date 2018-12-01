import React, { Component } from 'react';
import Header from './components/Header';
import SplashScreen from './components/SplashScreen';
import Footer from './components/Footer';
import UserAuth from './components/UserAuth'

class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <SplashScreen></SplashScreen>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
