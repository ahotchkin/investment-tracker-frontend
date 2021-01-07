import React from 'react';
import { connect } from 'react-redux';

// Should this be here or in UserStockscontainer???
import { updateUserStockForm } from '../actions/userStockForm';
import { clearUserStockForm } from '../actions/userStockForm';
// // These are attributes of a stock that need to be entered. A new stock will be created if it doesn't already exist.
// name: "",
// symbol: "",
// industry: "",
// sector: "",
// // These are attributes of a user_stock that are specific to the current user.
// purchaseDate: "",
// numberOfShares: "",
// totalSpent: ""

const handleOnChange = () => {

}

const handleOnSubmit = () => {
  console.log("You've submitted your userStock")
}

const UserStockInput = props => {
  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        value={props.userStockFormData.name}
        onChange={handleOnChange}
      />

      <br />

      <label htmlFor="symbol">Symbol: </label>
      <input
        type="text"
        name="symbol"
        id="symbol"
        value={props.userStockFormData.symbol}
        onChange={handleOnChange}
      />

      <br />


    </form>
  )
}

// should these be in UserStocksContainer?
mapStateToProps = state => {
  return {
    userStockFormData: props.userStockForm
  }
}

const mapDispatchToProps = {
  updateUserStockForm,
  clearUserStockForm
}

export default connect(mapStateToProps, mapDispatchToProps)(UserStockInput);
