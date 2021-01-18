// synchronous actions
export const setUserStocks = userStocks => {
  return {
    type: "SET_USER_STOCKS",
    userStocks
  }
}

export const addUserStock = userStock => {
  return {
    type: "ADD_USER_STOCK",
    userStock
  }
}

// asynchronous actions
export const getUserStocks = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/user_stocks", {
    credentials: "include",
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
  })
    .then(response => response.json())
    .then(json => {
      if (json.error) {
        throw new Error(json.error)
      } else {
        dispatch(setUserStocks(json.data))
      }
    })
    .catch(json => console.log(json))
  }
}

export const createUserStock = (userStockFormData, userId, stockId, history) => {
  const userStock = {
    purchase_date: userStockFormData.purchaseDate,
    number_of_shares: userStockFormData.numberOfShares,
    total_spent: userStockFormData.totalSpent,
    user_id: userId,
    stock_id: stockId,
  }

  return dispatch => {
    return fetch("http://localhost:3001/api/v1/user_stocks", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(userStock)
    })
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          throw new Error(json.error)
        } else {
          dispatch(addUserStock(json.data))
          history.push("/")
        }
      })
      .catch(json => console.log(json))
  }
}
