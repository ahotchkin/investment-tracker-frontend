import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import signUpForm from './reducers/signUpForm';
import loginForm from './reducers/loginForm';
import currentUser from './reducers/currentUser';
import userStockForm from './reducers/userStockForm';
import stocks from './reducers/stocks';

// could separate this into a separate rootReducer file
const reducer = combineReducers({
  signUpForm,
  loginForm,
  currentUser,
  userStockForm,
  stocks
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
