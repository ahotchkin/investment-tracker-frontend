import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import UserStockInput from '../components/userStocks/UserStockInput';

// update to functional component with hooks
class UserStocksContainer extends Component {

  state = {
    loaded: false
  }

  componentDidMount() {
    this.setState({
      loaded: true
    })
  }

  render() {
    return (
      <div>
        <h3>I'm in the UserStocksContainer</h3>
        <Switch>
          { !!this.state.loaded ?
            <Route exact path={this.props.match.url} render={ routerProps => <UserStockInput userId={this.props.currentUser.id} stocks={this.props.stocks} /> } />
          :
            null
          }
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
