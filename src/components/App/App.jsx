import React from 'react';
import axios from 'axios';
import './App.css';
import CustomerForm from '../CustomerForm/CustomerForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PizzaList from '../PizzaList/PizzaList';
import HeaderWithCart from '../HeaderWithCart/HeaderWithCart';
import { HashRouter,  } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPizza();
  });

  const fetchPizza = () => {
    console.log("inside fetchPizza()");
    axios
      .get("/api/pizza")
      .then((response) => {
        dispatch({ type: "GET_PIZZA", payload: response.data });
      })
      .catch((error) => {
        console.log("error");
      });
  };

  return (
    <div className="App">
      <Router>
        {/* Get pizza list and display */}
        <Route exact path="/">
        <HeaderWithCart />
        <PizzaList />
        </Route>

        {/* Customer Form */}
        <Route path="custInfo">
        <CustomerForm />
        </Route>
        {/* Checkout */}

        {/* Admin */}

    </div>
  );
}

export default App;
