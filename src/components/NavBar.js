import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../actions/currentUser';

const NavBar = ({ logout }) => {

  return (
    <div>
      <NavLink exact activeclass="true" to="/">
        Home
      </NavLink>
        |
      <NavLink exact activeclass="true" to="/user_stocks/new">
        Add Stock
      </NavLink>
        |
      <NavLink exact activeclass="true" to="/stocks">
        All Stocks
      </NavLink>
        |
      <NavLink exact activeclass="true" to="/logout" onClick={logout}>
        Log Out
      </NavLink>
    </div>
  )
}

export default connect(null, { logout })(NavBar);
