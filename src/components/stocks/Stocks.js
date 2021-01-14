import React from 'react';
import { connect } from 'react-redux';

import StockCard from './StockCard';

const Stocks = props => {
  const stockCards = props.stocks.map(stock => <StockCard stock={stock} key={stock.id} />)

  return (
    <div>
      <h3>All Stocks</h3>
      <ul>
        { stockCards.length > 0 ? stockCards : null }
      </ul>
    </div>
  )
}

export default connect()(Stocks);
