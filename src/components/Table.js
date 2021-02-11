import React from 'react';
import { useTable } from 'react-table'

const Table = props => {
  console.log("table props: ", props)

  const columns = React.useMemo(
   () => [
     {
       Header: "Date Purchased",
       accessor: "datePurchased", // accessor is the "key" in the data
     },
     {
       Header: "Days Held",
       accessor: "daysHeld",
     },
     {
       Header: "Stock",
       accessor: "stock",
     },
     {
       Header: "Symbol",
       accessor: "symbol",
     },
     {
       Header: "Industry",
       accessor: "industry",
     },
     {
       Header: "Sector",
       accessor: "sector",
     },
     {
       Header: "Purchase Cost",
       accessor: "purchaseCost",
     },
     {
       Header: "Current Share Price",
       accessor: "currentSharePrice",
     },
     {
       Header: "Number of Shares",
       accessor: "numberOfShares",
     },
     {
       Header: "Total Spent",
       accessor: "totalSpent",
     },
     {
       Header: "Total Stock Value",
       accessor: "totalStockValue",
     },
     {
       Header: "% Return",
       accessor: "percentReturn",
     },
     {
       Header: "Absolute $ Return",
       accessor: "absoluteReturn",
     },
     {
       Header: "% Portfolio",
       accessor: "percentOfPortfolio",
        accessor: row => {
          const totalPortfolioValue = data.map(cell => parseFloat(cell.totalStockValue))

          // const totalPortfolioValue = data.map(cell => cell.totalStockValue).reduce((sum, current) => sum + current)
          // return ((row.totalStockValue / totalPortfolioValue) * 100).toFixed(2)
          return totalPortfolioValue
        }
     },
     {
       Header: "% of Total Cost",
       accessor: "percentOfTotal",
        accessor: row => {
          const totalCost = data.map(cell => cell.price).reduce((sum, current) => sum + current)
          return ((row.price / totalCost) * 100).toFixed(2)
        }
     },
   ],
   []
  )

  // const data = React.useMemo(
  //  () => [
  //    {
  //      product: "TV",
  //      price: 200,
  //      percentOfTotal: ""
  //    },
  //    {
  //      product: "Computer",
  //      price: 800,
  //      percentOfTotal: ""
  //
  //    },
  //    {
  //      product: "Nintendo",
  //      price: 300,
  //      percentOfTotal: ""
  //    },
  //  ],
  //  []
  // )

  console.log(props.userStocks)
  const userStock = () => {
    if (props.userStocks.length > 0) {
      return props.userStocks.map(userStock => {
        let userStockObj = {}

        const userStockStock = props.stocks.find(stock => stock.id === userStock.relationships.stock.data.id)
        // console.log(parseFloat(userStockStock["Time Series (5min)"][userStockStock["Meta Data"]["3. Last Refreshed"]]["1. open"]).toFixed(2))
        // console.log(userStockStock)


        //
        const currentSharePrice = () => {
          if (!!userStockStock["Meta Data"]) {
            const lastRefreshed = userStockStock["Meta Data"]["3. Last Refreshed"]
            const currentStockInfo = userStockStock["Time Series (5min)"][lastRefreshed]
            const currentSharePrice = parseFloat(currentStockInfo["1. open"]).toFixed(2)
            return currentSharePrice
          }
        }

        // const currentSharePrice = parseFloat(userStockStock["Time Series (5min)"][userStockStock["Meta Data"]["3. Last Refreshed"]]["1. open"]).toFixed(2)

        const totalStockValue = (currentSharePrice() * userStock.attributes.number_of_shares).toFixed(2)

        const totalSpent = parseFloat(userStock.attributes.total_spent).toFixed(2)

        userStockObj.datePurchased = userStock.attributes.purchase_date;
        userStockObj.daysHeld = Math.floor((new Date().getTime() - Date.parse(userStock.attributes.purchase_date)) / (1000*60*60*24));
        userStockObj.stock = userStockStock.attributes.name;
        userStockObj.symbol = userStockStock.attributes.symbol;
        userStockObj.industry = userStockStock.attributes.industry;
        userStockObj.sector = userStockStock.attributes.sector;
        userStockObj.purchaseCost = `$${(userStock.attributes.total_spent / userStock.attributes.number_of_shares).toFixed(2)}`;
        userStockObj.currentSharePrice = "$" + currentSharePrice();
        userStockObj.numberOfShares = userStock.attributes.number_of_shares;
        userStockObj.totalSpent = `$${parseFloat(userStock.attributes.total_spent).toFixed(2)}`;
        userStockObj.totalStockValue = "$" + totalStockValue;
        userStockObj.percentReturn = ((totalStockValue / totalSpent) - 1).toFixed(2) + "%";
        userStockObj.absoluteReturn = "$" + (totalStockValue - totalSpent).toFixed(2);
        // userStockObj.percentOfPortfolio = "% portfolio";

        // userStockObj.percentOfPortfolio: "% portfolio",

        return userStockObj
      })

    }


  }

  console.log(userStock())
  const data = React.useMemo(
    () => userStock(), []
  )


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <div>
      <h3>This is my table component</h3>
      <table {...getTableProps()} style={{ border: "solid 1px blue"}}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} style={{ borderBottom: "solid 3px red", background: "aliceblue", color: "black", fontWeight: "bold"}}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} style={{ padding: "10px", border: "solid 1px gray", background: "papayawhip"}}>
                      {cell.render("Cell")}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
