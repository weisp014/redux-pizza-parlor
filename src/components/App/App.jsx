import React from "react";
import axios from "axios";
import "./App.css";
import CustomerForm from "../CustomerForm/CustomerForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PizzaList from "../PizzaList/PizzaList";
import { HashRouter as Router, Route, Link } from "react-router-dom";

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
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>
      <Router>
        {/* Get pizza list and display */}
        <Route exact path="/">
        <PizzaList />
        </Route>

        {/* Customer Form */}
        <Route path="custInfo">
        <CustomerForm />
        </Route>
        {/* Checkout */}

        {/* Admin */}

      </Router>
    </div>
  );
}

export default App;
