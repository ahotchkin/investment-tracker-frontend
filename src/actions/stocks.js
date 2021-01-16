// synchronous actions
export const setStocks = stocks => {
  return {
    type: "SET_STOCKS",
    stocks
  }
}
// Eventually want user to have ability to add a stock to the database, ideally as they add a userStock.
// export const addStock = stock => {
//   return {
//     action: "ADD_STOCK",
//     stock
//   }
// }
//
// // asynchronous actions

export const getStocks = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/stocks", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          throw new Error(json.error)
        } else {
          dispatch(setStocks(json.data))
        }
      })
      .catch(json => console.log(json))
  }
}
// Eventually want user to have ability to add a stock to the database, ideally as they add a userStock.
// export const createStock = stockData => {
//   console.log(stockData)
//   const stock = {
//     name: stockData.name,
//     symbol: stockData.symbol,
//     industry: stockData.industry,
//     sector: stockData.sector,
//   }
//   return dispatch {
//     fetch("http://localhost:3001/stocks/new", {
//       credentials: "include",
//       method: "POST",
//       body: JSON.stringify()
//     })
//   }
// }
