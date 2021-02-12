import React from 'react';
import { connect } from 'react-redux';

const Stock = props => {
  const handleOnChange = event => {
    // use event to dynamically grab the name and value
    const { name, value } = event.target;
    // build an object that can update whichever field the user is updating
    const updatedFormInfo = {
      // using spread operator on loginForm keeps the necessary properties in place
      ...props.userStockFormData,
      [name]: value
    };
    // call updateLoginForm and pass destructured object of name and value as argument
    props.updateUserStockForm(updatedFormInfo);
  }

  const handleOnSubmit = event => {
    event.preventDefault();
    props.createUserStock(props.stockFormData)
    props.clearUserStockForm()
  }

  return (
    <div>
      <h4>Add a Stock to the Database</h4>
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

        <label htmlFor="industry">Industry: </label>
        <input
          type="text"
          name="industry"
          id="industry"
          value={props.userStockFormData.industry}
          onChange={handleOnChange}
        />

        <br />

        <label htmlFor="sector">Sector: </label>
        <input
          type="text"
          name="sector"
          id="sector"
          value={props.userStockFormData.sector}
          onChange={handleOnChange}
        />

        <br />

        <input type="submit" value="Add Stock" />

      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    stockFormData: state.stockForm
  }
}


export default connect(mapStateToProps)(Stock);
