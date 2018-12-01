import React, { Component } from 'react';
import Welcome from './pages/Welcome';
import Update from './components/Update';
import UserSignIn from './components/UserSignIn';
import { Route, Switch, HashRouter as Router, Redirect } from 'react-router-dom';
import UserSignUp from './components/UserSignUp';

class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/signin" component={UserSignIn}/>
          <Route path="/signup" component={UserSignUp}/>
          <Route path="/update" component={Update}/>
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
