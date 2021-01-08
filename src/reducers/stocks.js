const stocksReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_STOCKS":
      return action.stocks
    default:
      return state
  }
}

export default stocksReducer;
