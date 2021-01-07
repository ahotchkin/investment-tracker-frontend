export const updateUserStockForm = formData => {
  return {
    type: "UPDATE_USER_STOCK_FORM",
    formData
  }
}

export const clearUserStockForm = formData => {
  return {
    type: "CLEAR_USER_STOCK_FORM"
  }
}
