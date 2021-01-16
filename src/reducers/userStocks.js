const userStocksReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_USER_STOCKS":
      return action.userStocks
    case "ADD_USER_STOCK":
      console.log(state.concat(action.userStock))

      // return state.concat(action.userStock)
      return state
    default:
      return state
  }
}

export default userStocksReducer;
