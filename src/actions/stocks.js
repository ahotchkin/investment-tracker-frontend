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

export const addStock = stock => {
  return {
    type: "ADD_STOCK",
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
          json.data.map(stock => dispatch(getStockInfo(stock)))
        }
      })
      .catch(json => console.log(json))
  }
}

export const getStockInfo = stock => {
  const stockSymbol = stock.attributes.symbol

  return dispatch => {
    return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=5min&apikey=V620KZOT3DPD8ZME`, {
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
          const stockInfo = {...json, id: stock.id}
          dispatch(setStockInfo(stockInfo))
        }
      })
      .catch(json => console.log(json))
  }
}

export const createStock = stockData => {
  const stockInfo = {
    stock: stockData
  }

  return dispatch => {
    return fetch("http://localhost:3001/stocks", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(stockInfo)
    })
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          throw new Error(json.error)
        } else {
          dispatch(addStock(json.data))
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
