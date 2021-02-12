import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import StockCard from './StockCard';

const Stocks = props => {
  const stockCards = props.stocks.map(stock => <StockCard stock={stock} key={stock.id} />)

  return (
    <div>
      <h3>All Stocks</h3>
      <ul>
        { stockCards.length > 0 ? stockCards : null }
      </ul>
      <Link to="/stocks/new">
        <button type="button">
          Add Stock to Database
        </button>
      </Link>
    </div>
  )
}

export default connect()(Stocks);
