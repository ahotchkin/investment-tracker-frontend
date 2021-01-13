import React from 'react';
import { connect } from 'react-redux';

const Stock = props => {
  console.log(props.stocks)
  return (
    <div>
      <h3>All Stocks</h3>
    </div>
  )
}

export default connect()(Stock);
