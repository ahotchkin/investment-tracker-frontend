import React from 'react';
import { Link } from 'react-router-dom';

import UserStockCard from './UserStockCard';

const UserStocks = props => {

  // How do I call this in userStockCards when defining userStockStock prop?
  // const userStockStock = (userStock) => {
  //   props.stocks.filter(stock => stock.id === userStock.relationships.stock.data.id)
  // }

  const userStockCards = props.userStocks.map(userStock => <UserStockCard userStock={userStock} key={userStock.id} userStockStock={props.stocks.find(stock => stock.id === userStock.relationships.stock.data.id)}/>)

  return (
    <div>
      <h4>My Stocks</h4>

        <table>
          <thead>
            <tr>
              <td>Date Purchased</td>
              <td>Days Held</td>
              <td>Stock</td>
              <td>Symbol</td>
              <td>Industry</td>
              <td>Sector</td>
              <td>Purchase Cost</td>
              <td>Current Share Price</td>
              <td>Number of Shares</td>
              <td>Total Spent</td>
              <td>Total Stock Value</td>
              <td>% Return</td>
              <td>Absolute $ Return</td>
              <td>% Portfolio</td>
            </tr>
          </thead>
          <tbody>
            { userStockCards.length > 0 ? userStockCards : null }
          </tbody>
        </table>

      <Link to="/user_stocks/new">
        <button type="button">
          Add Stock
        </button>
      </Link>

    </div>
  )
}

export default UserStocks;
