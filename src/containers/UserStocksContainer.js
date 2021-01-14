import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import UserStockInput from '../components/userStocks/UserStockInput';

// update to functional component with hooks
class UserStocksContainer extends Component {
  render() {
    return (
      <div>
        <h3>I'm in the UserStocksContainer</h3>
        <Switch>
          <Route exact path={this.props.match.url} render={ routerProps => <UserStockInput stocks={this.props.stocks} /> } />
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

// export default connect(mapStateToProps)(UserStocksContainer);
export default UserStocksContainer;
