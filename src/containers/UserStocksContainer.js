import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import UserStockInput from '../components/userStocks/UserStockInput';
// import UserStocks from '../components/userStocks/UserStocks'

// update to functional component with hooks
class UserStocksContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>I'm in the UserStocksContainer</h3>
        <Switch>
          <Route exact path={this.props.match.url} render={ routerProps => <UserStockInput userId={this.props.currentUser.id} stocks={this.props.stocks} history={this.props.history} /> } />

          {/*
          <Route exact path={this.props.match.url} render={ routerProps => <UserStocks userId={this.props.currentUser.id} stocks={this.props.stocks} userStocks={this.props.userStocks} /> } />
          */}
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
