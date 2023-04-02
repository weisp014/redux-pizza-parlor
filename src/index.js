import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const customerInfo = (state = {}, action) => {
    if (action.type === 'NEW_CUSTOMER') {
        console.log('customer info:', action.payload);
        return action.payload;
    } else if (action.type === 'CHECKOUT') {
      return {};
    }
    return state;
}

const cart = (state = [], action) => {
  if(action.type === 'ADD_TO_CART'){
    return [...state, action.payload]
  }
  else if(action.type === 'REMOVE_FROM_CART' ){
    return state.filter(element => element !== action.payload);
  }
  else if(action.type === 'CHECKOUT') {
    return [];
  }
  return state
}

const pizzaList = (state = [], action) => {
  if(action.type === 'GET_PIZZA'){
    return action.payload
  }
  return state;
}


const storeInstance = createStore(
  combineReducers({
    //list of reducers here
    pizzaList,
    customerInfo,
    cart,
    
  }),
  applyMiddleware(logger)
);

// post route to add data to tables upon checkout


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
