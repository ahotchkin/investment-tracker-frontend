// synchronous actions
export const addUserStock = userStock => {
  return {
    action: "ADD_USER_STOCK",
    userStock
  }
}

// asynchronous actions
export const createUserStock = (userStockFormData, userId, stockId) => {
  console.log(userStockFormData)
  const userStock = {
    purchase_date: userStockFormData.purchaseDate,
    number_of_shares: userStockFormData.numberOfShares,
    total_spent: userStockFormData.totalSpent,
    user_id: userId,
    stock_id: stockId,
  }

  return dispatch => {
    fetch("http://localhost:3001/api/v1/user_stocks/new", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userStock)
    })
      .then(response => response.json)
      .then(json => {
        if (json.error) {
          throw new Error(json.error)
        } else {
          dispatch(addUserStock(json.data))
        }
      })
  }
}
