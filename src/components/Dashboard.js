import React from 'react';

import UserStocks from './userStocks/UserStocks';
import Table from './Table';

const Dashboard = props => {
  return (
    <div>
      <p>
        Welcome to your Investment Tracker Dashboard!
      </p>
      <UserStocks currentUser={props.currentUser} userStocks={props.userStocks} stocks={props.stocks} />
      <Table currentUser={props.currentUser} userStocks={props.userStocks} stocks={props.stocks} />
    </div>
  )
}

export default Dashboard;
