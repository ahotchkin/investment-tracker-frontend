import React from 'react';
import { connect } from 'react-redux';

import { updateSignUpForm } from '../actions/signUpForm';
import { clearSignUpForm } from '../actions/signUpForm';
import { signUp } from '../actions/currentUser';

const SignUp = props => {
  const handleOnChange = event => {
    console.log("updating form")
    // use event to dynamically grab the name and value
    const { name, value } = event.target;
    // build an object that can update whichever field the user is updating
    const updatedFormInfo = {
      // using spread operator on loginForm keeps the necessary properties in place
      ...props.signUpFormData,
      [name]: value
    };
    // call updateLoginForm and pass destructured object of name and value as argument
    props.updateSignUpForm(updatedFormInfo);
  }

  const handleOnSubmit = event => {
    event.preventDefault();
    props.signUp(props.signUpFormData)
    props.clearSignUpForm()
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="firstName">First Name: </label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={props.signUpFormData.firstName}
        onChange={handleOnChange}
      />

      <br />

      <label htmlFor="lastName">Last Name: </label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={props.signUpFormData.lastName}
        onChange={handleOnChange}
      />

      <br />

      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        id="username"
        value={props.signUpFormData.username}
        onChange={handleOnChange}
      />

      <br />

      <label htmlFor="password">Password: </label>
      <input
        type="text"
        name="password"
        id="password"
        value={props.signUpFormData.password}
        onChange={handleOnChange}
      />

      <br />

      {/* Add password confirmation field

      <label htmlFor="password_confirmation">Confirm Password: </label>
      <input
        type="text"
        name="password_confirmation"
        id="password_confirmation"
        value={props.signUpFormData.password_confirmation}
        onChange={handleOnChange}
      />

      */}

      <label htmlFor="email">Email: </label>
      <input
        type="text"
        name="email"
        id="email"
        value={props.signUpFormData.email}
        onChange={handleOnChange}
      />

      <br />

      <label htmlFor="income">Income: </label>
      <input
        type="number"
        name="income"
        id="income"
        value={props.signUpFormData.income}
        onChange={handleOnChange}
      />

      <br />

      <input type="submit" value="Create Account" />

    </form>

  )
}

// this gives me an argument to use in this component that looks like: {username: "allyh", password: "password"}
const mapStateToProps = state => {
  return {
    // where is this called loginForm - how can I rename to loginFormData?
    signUpFormData: state.signUpForm
  }
}

const mapDispatchToProps = {
  updateSignUpForm,
  clearSignUpForm,
  signUp
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
