import React from 'react';
import { connect } from 'react-redux';

// Should this be here or in UserStockscontainer???
import { updateUserStockForm } from '../../actions/userStockForm';
import { clearUserStockForm } from '../../actions/userStockForm';
import { createUserStock } from '../../actions/userStocks';
// // These are attributes of a stock that need to be entered. A new stock will be created if it doesn't already exist.
// name: "",
// symbol: "",
// industry: "",
// sector: "",
// // These are attributes of a user_stock that are specific to the current user.
// purchaseDate: "",
// numberOfShares: "",
// totalSpent: ""


const UserStockInput = props => {

  // refactor since this is used in all forms
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
    console.log(props.userStockFormData)
    // props.createUserStock(props.userStockFormData)
    props.clearUserStockForm()
  }

  console.log(props)
  return (
    <div>
      <h4>Add a Stock to Your Portfolio</h4>
      <form onSubmit={handleOnSubmit}>
        {/* Have drop down list, when user selects stock, populate Symbol, Industry, and Sector. If user selects "New Stock", have new field appear for user to type stock name. */}
        <label htmlFor="stocks">Stock:</label>
        <select id="stocks" name="stocks" defaultValue="DEFAULT">
          <option value="DEFAULT" disabled hidden>Select</option>
          {/* Sort stocks alphabetically - do this on backend? */}
          { props.stocks.map(stock =>  <option key={stock.id} value={stock.attributes.name.toLowerCase()}>{stock.attributes.name}</option>) }
        </select>

        <br />

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
        {/* If stock/ETF is already in database, prepopulate symbol */}
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

        <label htmlFor="purchaseDate">Purchase Date: </label>
        <input
          type="date"
          name="purchaseDate"
          id="purchaseDate"
          value={props.userStockFormData.purchaseDate}
          onChange={handleOnChange}
        />

        <br />

        <label htmlFor="numberOfShares">Number of Shares: </label>
        <input
          type="number"
          name="numberOfShares"
          id="numberOfShares"
          value={props.userStockFormData.numberOfShares}
          onChange={handleOnChange}
        />

        <br />

        <label htmlFor="totalSpent">Total Spent: </label>
        <input
          type="number"
          name="totalSpent"
          id="totalSpent"
          value={props.userStockFormData.totalSpent}
          onChange={handleOnChange}
        />

        <br /><br />

        <input type="submit" value="Add Stock" />

      </form>
    </div>
  )
}

// should these be in UserStocksContainer?
const mapStateToProps = state => {
  return {
    userStockFormData: state.userStockForm
  }
}

const mapDispatchToProps = {
  updateUserStockForm,
  clearUserStockForm,
  createUserStock
}

export default connect(mapStateToProps, mapDispatchToProps)(UserStockInput);
