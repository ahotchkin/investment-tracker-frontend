import React from 'react';

const UserStockCard = props => {

  const daysHeld = Math.floor((new Date().getTime() - Date.parse(props.userStock.attributes.purchase_date)) / (1000*60*60*24))
  //
  // const totalSpent = parseFloat(props.userStock.attributes.total_spent).toFixed(2)
  //
  // // currently causing error when userStockStock hasn't loaded yet
  // const currentSharePrice = () => {
  //   if (!!props.userStockStock["Meta Data"]) {
  //     const lastRefreshed = props.userStockStock["Meta Data"]["3. Last Refreshed"]
  //     const currentStockInfo = props.userStockStock["Time Series (5min)"][lastRefreshed]
  //     const currentSharePrice = parseFloat(currentStockInfo["1. open"]).toFixed(2)
  //     return currentSharePrice
  //   }
  // }
  //
  // const totalStockValue = (currentSharePrice() * props.userStock.attributes.number_of_shares).toFixed(2)
  //
  return (
    <tr>
      {/*
      <td>{props.userStock.attributes.purchase_date}</td>
      <td>{daysHeld}</td>
      <td>{props.userStockStock.attributes.name}</td>
      <td>{props.userStockStock.attributes.symbol}</td>
      <td>{props.userStockStock.attributes.industry}</td>
      <td>{props.userStockStock.attributes.sector}</td>
      <td>${(props.userStock.attributes.total_spent / props.userStock.attributes.number_of_shares).toFixed(2)}</td>
      <td>${currentSharePrice()}</td>
      <td>{props.userStock.attributes.number_of_shares}</td>
      <td>${totalSpent}</td>
      <td>${totalStockValue}</td>
      <td>{((totalStockValue / totalSpent) - 1).toFixed(2)}</td>
      <td>${(totalStockValue - totalSpent).toFixed(2)}</td>
      <td>% portfolio</td>
      */}

      <td>{props.userStock.attributes.purchase_date}</td>
      <td>{daysHeld}</td>
      <td>{props.userStockStock.attributes.name}</td>
      <td>{props.userStockStock.attributes.symbol}</td>
      <td>{props.userStockStock.attributes.industry}</td>
      <td>{props.userStockStock.attributes.sector}</td>
      <td>current share price here</td>
      <td>{props.userStock.attributes.number_of_shares}</td>
      <td>$ total spent</td>
      <td>$ total stock value</td>
      <td>% return here</td>
      <td>$ return here</td>
      <td>% portfolio</td>

    </tr>
  )
}

export default UserStockCard;
