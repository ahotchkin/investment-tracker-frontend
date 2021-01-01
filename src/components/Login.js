import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm';
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
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        value={props.loginFormData.username}
        name="username"
        type="text"
        onChange={handleOnChange}
      />
      <label htmlFor="password">Password: </label>
      <input
        value={props.loginFormData.password}
        name="password"
        type="text"
        onChange={handleOnChange}
      />
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
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
