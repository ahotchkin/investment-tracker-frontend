const userStocksReducer = (state = [], action) {
  switch (action.type) {
    case: "ADD_USER_STOCK"
      console.log(state.concat(action.userStock))
      return state.concat(action.userStock)
    default
      return state
  }
}

export default userStocksReducer;
