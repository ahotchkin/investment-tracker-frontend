// synchronous actions
export const addUserStock = userStock => {
  return {
    action: "ADD_USER_STOCK",
    userStock
  }
}

// asynchronous actions
export const createUserStock = userStockData => {
  // console.log(userStockData)
  // const userStock = {
  //   purchase_date: userStockData.purchaseDate,
  //   number_of_shares: userStockData.numberOfShares,
  //   total_spent: userStockData.totalSpent
  // }
  // return dispatch => {
  //   fetch("http://localhost:3001/user_stocks/new", {
  //     credentials: "include",
  //     method: "POST",
  //     body: JSON.stringify()
  //   })
  // }
}
