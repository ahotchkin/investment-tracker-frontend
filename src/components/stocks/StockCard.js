import React from 'react';

const StockCard = props => {
  console.log(props)
  return (
    <li>{props.stock.attributes.name}</li>
  )
}

export default StockCard;
