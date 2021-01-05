import React, { Component } from 'react';
import Login from '../components/Login';
import { getCurrentUser } from '../actions/currentUser';
import { connect } from 'react-redux';

// change this to functional component with hooks - how????
class MainContainer extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <p>
          Investment Tracker Dashboard
        </p>
        <Login />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser
};

export default connect(null, mapDispatchToProps)(MainContainer);
