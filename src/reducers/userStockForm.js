const initialState = {
  // These are attributes of a stock that need to be entered. A new stock will be created if it doesn't already exist.
  stock: "",
  // Don't need the below right now - user can only select a stock that is already in the database
  // symbol: "",
  // industry: "",
  // sector: "",
  // These are attributes of a user_stock that are specific to the current user.
  purchaseDate: "",
  numberOfShares: "",
  totalSpent: ""
}

const userStockFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER_STOCK_FORM":
      return action.formData
    case "CLEAR_USER_STOCK_FORM":
      return initialState
    default:
      return state
  }
}

export default userStockFormReducer
