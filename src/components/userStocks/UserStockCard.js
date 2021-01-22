import React from 'react';

const UserStockCard = props => {
  console.log(props)

  const daysHeld = Math.floor((new Date().getTime() - Date.parse(props.userStock.attributes.purchase_date)) / (1000*60*60*24))

  return (
    <tr>
      <td>{props.userStock.attributes.purchase_date}</td>
      <td>{daysHeld}</td>
      <td>{props.userStockStock.attributes.name}</td>
      <td>{props.userStockStock.attributes.symbol}</td>
      <td>{props.userStockStock.attributes.industry}</td>
      <td>{props.userStockStock.attributes.sector}</td>
      <td>${(props.userStock.attributes.total_spent / props.userStock.attributes.number_of_shares).toFixed(2)}</td>
      <td>Current stock price</td>
      <td>{props.userStock.attributes.number_of_shares}</td>
      <td>${parseFloat(props.userStock.attributes.total_spent).toFixed(2)}</td>
      <td>Stock value</td>
      <td>% return</td>
      <td>$ return</td>
      <td>% portfolio</td>
    </tr>
)
}

export default UserStockCard;
