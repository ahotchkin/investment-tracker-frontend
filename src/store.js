import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import signUpForm from './reducers/signUpForm';
import loginForm from './reducers/loginForm';
import currentUser from './reducers/currentUser';
import stocks from './reducers/stocks';
import stockForm from './reducers/stockForm';
import userStocks from './reducers/userStocks';
import userStockForm from './reducers/userStockForm';

// could separate this into a separate rootReducer file
const reducer = combineReducers({
  signUpForm,
  loginForm,
  currentUser,
  stocks,
  stockForm,
  userStocks,
  userStockForm,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
