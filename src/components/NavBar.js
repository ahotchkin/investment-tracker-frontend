import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../actions/currentUser';

const NavBar = ({ logout }) => {

  return (
    <NavLink exact activeclass="true" to="/logout" onClick={logout}>
      Log Out
    </NavLink>
  )
}

export default connect(null, { logout })(NavBar);
