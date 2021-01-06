const initialState = {
  firstName: "",
  lastName: "",
  password: "",
  username: "",
  email: "",
  income: ""
}

const signUpFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SIGNUP_FORM":
      return action.formData
    case "CLEAR_SIGNUP_FORM":
      return initialState
    default:
      return state
  }
}

export default signUpFormReducer;
