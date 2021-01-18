import React from 'react';

import UserStocks from './userStocks/UserStocks';

const Dashboard = props => {
  return (
    <div>
      <p>
        Welcome to your Investment Tracker Dashboard!
      </p>
      <UserStocks currentUser={props.currentUser} userStocks={props.userStocks} />
    </div>
  )
}

export default Dashboard;
