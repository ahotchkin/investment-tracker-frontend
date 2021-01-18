import React from 'react';
import { Link } from 'react-router-dom';

import UserStockCard from './UserStockCard';

const UserStocks = props => {
  const userStockCards = props.userStocks.map(userStock => <UserStockCard userStock={userStock} key={userStock.id} />)

  return (
    <div>
      <h4>My Stocks</h4>
      
      <ul>
        { userStockCards.length > 0 ? userStockCards : null }
      </ul>

      <Link to="/user_stocks/new">
        <button type="button">
          Add Stock
        </button>
      </Link>

    </div>
  )
}

export default UserStocks;
