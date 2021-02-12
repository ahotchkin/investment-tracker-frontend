import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Stocks from '../components/stocks/Stocks';
import StockInput from '../components/stocks/StockInput';

import { updateStockForm } from '../actions/stockForm';
import { clearStockForm } from '../actions/stockForm';
import { createStock } from '../actions/stocks';

class StocksContainer extends Component {
  render() {
    return (
      <div>
        <h3>I'm in the StocksContainer</h3>
        <Switch>
          <Route exact path={this.props.match.url} render={ routerProps => <Stocks stocks={this.props.stocks} /> } />
          <Route exact path={`${this.props.match.url}/new`} render={ routerProps => <StockInput updateStockForm={this.props.updateStockForm} clearStockForm={this.props.clearStockForm} createStock={this.props.createStock} /> } />
        </Switch>
      </div>
    )

  }
}

// const mapStateToProps = state => {
//   return {
//     stocks: state.stocks
//   }
// }



export default connect(null, { updateStockForm, clearStockForm, createStock })(StocksContainer);
