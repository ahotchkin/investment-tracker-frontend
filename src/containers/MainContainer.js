import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCurrentUser } from '../actions/currentUser';

import Login from '../components/Login';
import NavBar from '../components/NavBar';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import SignUp from '../components/SignUp'

import UserStocksContainer from './UserStocksContainer';
import StocksContainer from './StocksContainer';

// change this to functional component with hooks - how????
class MainContainer extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        { this.props.loggedIn ? <NavBar /> : null }
        <Switch>
          <Route exact path="/" render={ routerProps => this.props.loggedIn ? <Dashboard currentUser={this.props.currentUser} stocks={this.props.stocks} userStocks={this.props.userStocks} /> : <Home /> } />

          <Route exact path="/login" render={ props => this.props.loggedIn ? <Redirect to="/" /> : <Login history={props.history}/> } />
          <Route exact path="/signup" render={ props => this.props.loggedIn ? <Redirect to="/" /> : <SignUp history={props.history}/> } />

          {/* Do I want this to go to /user_stocks or /user_stocks/new? Can't get it to work by using /user_stocks */}
          <Route exact path="/user_stocks/new" render={ routerProps => this.props.loggedIn ? <UserStocksContainer currentUser={this.props.currentUser} stocks={this.props.stocks} {...routerProps} /> : <Home /> } />

          <Route exact path="/stocks" render={ routerProps => this.props.loggedIn ? <StocksContainer stocks={this.props.stocks} {...routerProps} /> : <Home /> } />

          <Route exact path="/logout" render={ () => <Redirect to="/" /> } />

        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser,
    currentUser: state.currentUser,
    stocks: state.stocks,
    userStocks: state.userStocks
  }
};

const mapDispatchToProps = {
  getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
