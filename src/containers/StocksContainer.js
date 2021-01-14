import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';

import Stocks from '../components/stocks/Stocks';

class StocksContainer extends Component {
  render() {
    return (
      <div>
        <h3>I'm in the StocksContainer</h3>
        <Switch>
          <Route exact path={this.props.match.url} render={ routerProps => <Stocks stocks={this.props.stocks} /> } />
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

// export default connect(null)(StocksContainer);
export default StocksContainer;
