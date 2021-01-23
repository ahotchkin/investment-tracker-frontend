// synchronous actions
export const setStocks = stocks => {
  return {
    type: "SET_STOCKS",
    stocks
  }
}

export const setStockInfo = stock => {
  return {
    type: "SET_STOCK_INFO",
    stock
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
          json.data.map(stock => getStockInfo(stock))
        }
      })
      .catch(json => console.log(json))
  }
}

export const getStockInfo = stock => {
  const stockSymbol = stock.attributes.symbol
  console.log(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&apikey=V620KZOT3DPD8ZME`)

  return dispatch => {
    console.log("I'm here in dispatch")
    return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&apikey=V620KZOT3DPD8ZME`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          console.log("I'm here")
          throw new Error(json.error)
        } else {
          console.log("I'm here")
          // dispatch(setStockInfo(json.data))
        }
      })
      .atch(json => console.log(json))
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
