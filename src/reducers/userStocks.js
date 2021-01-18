const userStocksReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_USER_STOCKS":
      return action.userStocks
    case "ADD_USER_STOCK":
      return state.concat(action.userStock)
    default:
      return state
  }
}

export default userStocksReducer;
