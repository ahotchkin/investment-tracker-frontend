const stocksReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_STOCKS":
      return action.stocks
    case "SET_STOCK_INFO":
      return (state.map(stock => {
        if (stock.id === action.stock.id) {
          return Object.assign(stock, action.stock)
        } else {
          return stock
        }
      }))
    default:
      return state
  }
}

export default stocksReducer;
