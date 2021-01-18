import React from 'react';

const UserStockCard = props => {
  console.log(props)
  return (
    <div>
      <li>
        Purchase Date: {props.userStock.attributes.purchase_date} | Number of Shares: {props.userStock.attributes.number_of_shares} | Total Spent: {props.userStock.attributes.total_spent}
      </li>
    </div>
  )
}

export default UserStockCard;
