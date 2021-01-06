import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { getCurrentUser } from '../actions/currentUser';
import { connect } from 'react-redux';

import Login from '../components/Login';
import NavBar from '../components/NavBar';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import SignUp from '../components/SignUp'

// change this to functional component with hooks - how????
class MainContainer extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        { this.props.loggedIn ? <NavBar /> : null }
        <p>
          Investment Tracker Dashboard
        </p>
        <Switch>
          <Route exact path="/" render={ props => this.props.loggedIn ? <Dashboard /> : <Home /> } />
          <Route exact path="/login" render={ props => this.props.loggedIn ? <Redirect to="/" /> : <Login history={props.history}/> } />
          <Route exact path="/signup" render={ props => this.props.loggedIn ? <Redirect to="/" /> : <SignUp history={props.history}/> } />
          <Route exact path="/logout" render={ () => <Redirect to="/" /> } />

        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser,
    // currentUser: state.currentUser,
  }
};

const mapDispatchToProps = {
  getCurrentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
