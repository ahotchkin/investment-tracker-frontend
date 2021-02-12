export const updateStockForm = formData => {
  return {
    type: "UPDATE_STOCK_FORM",
    formData
  }
}

export const clearStockForm = formData => {
  return {
    type: "CLEAR_STOCK_FORM"
  }
}
