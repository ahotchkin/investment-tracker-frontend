export const updateLoginForm = formData => {
  return {
    type: "UPDATE_LOGIN_FORM",
    formData
  }
}

export const clearLoginForm = formData => {
  return {
    type: "CLEAR_LOGIN_FORM"
  }
}
