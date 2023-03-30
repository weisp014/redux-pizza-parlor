import { HashRouter as Router, Route, Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import "./App.css";
import CustomerForm from "../CustomerForm/CustomerForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PizzaList from "../PizzaList/PizzaList";
import Checkout from "../Checkout/Checkout";
import AdminPage from "../Admin/Admin";
import HeaderWithCart from "../HeaderWithCart/HeaderWithCart";

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
        <Route exact path="/custInfo">
          <CustomerForm />
        </Route>

        {/* Checkout */}
        <Route exact path="/checkout">
          <Checkout />
        </Route>

      {/* Admin */}

      <AdminPage />

      {/* <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p> */}
    
    </div>
  );
}

export default App;
