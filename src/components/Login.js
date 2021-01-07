import React from 'react';
import { connect } from 'react-redux';

import { updateLoginForm } from '../actions/loginForm';
import { clearLoginForm } from '../actions/loginForm';
import { login } from '../actions/currentUser';

const Login = props => {
  const handleOnChange = event => {
    // use event to dynamically grab the name and value
    const { name, value } = event.target;
    // build an object that can update whichever field the user is updating
    const updatedFormInfo = {
      // using spread operator on loginForm keeps the necessary properties in place
      ...props.loginFormData,
      [name]: value
    };
    // call updateLoginForm and pass destructured object of name and value as argument
    props.updateLoginForm(updatedFormInfo);
  }

  const handleOnSubmit = event => {
    event.preventDefault();
    props.login(props.loginFormData)
    props.clearLoginForm()
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        id="username"
        value={props.loginFormData.username}
        onChange={handleOnChange}
      />

      <br />

      <label htmlFor="password">Password: </label>
      <input
        type="text"
        name="password"
        id="password"
        value={props.loginFormData.password}
        onChange={handleOnChange}
      />

      <br />

      <input type="submit" value="Log In" />
    </form>
  )
}

// this gives me an argument to use in this component that looks like: {username: "allyh", password: "password"}
const mapStateToProps = state => {
  return {
    // where is this called loginForm - how can I rename to loginFormData?
    loginFormData: state.loginForm
  }
}

const mapDispatchToProps = {
  updateLoginForm,
  clearLoginForm,
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
