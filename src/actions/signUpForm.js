export const updateSignUpForm = formData => {
  return {
    type: "UPDATE_SIGNUP_FORM",
    formData
  }
}

export const clearSignUpForm = formData => {
  return {
    type: "CLEAR_SIGNUP_FORM"
  }
}
