import React from 'react';

const UserStockCard = props => {
  console.log(props)
  return (
    <tr>
      <td>{props.userStock.attributes.purchase_date}</td>
      <td># of days</td>
      <td>{props.userStockStock.attributes.name}</td>
      <td>{props.userStockStock.attributes.symbol}</td>
      <td>{props.userStockStock.attributes.industry}</td>
      <td>{props.userStockStock.attributes.sector}</td>
      <td>$$$$$</td>
      <td>Current stock price</td>
      <td>{props.userStock.attributes.number_of_shares}</td>
      <td>{props.userStock.attributes.total_spent}</td>
      <td>Stock value</td>
      <td>% return</td>
      <td>$ return</td>
      <td>% portfolio</td>
    </tr>
)
}

export default UserStockCard;
