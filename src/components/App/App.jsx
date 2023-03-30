import React from 'react';
import axios from 'axios';
import './App.css';
import CustomerForm from '../CustomerForm/CustomerForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PizzaList from '../PizzaList/PizzaList';
import Checkout from '../Checkout/Checkout';
import AdminPage from '../Admin/Admin';

import HeaderWithCart from '../HeaderWithCart/HeaderWithCart';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    fetchPizza();
  })



const fetchPizza = () => {
  console.log('inside fetchPizza()')
  axios.get('/api/pizza')
  .then(response => {
    dispatch({ type: 'GET_PIZZA', payload: response.data})
  })
  .catch(error => {
    console.log('error')
  })
}

  return (
    <div className='App'>
      <HeaderWithCart />
     
      <PizzaList />

      <CustomerForm />

      <Checkout />


      <AdminPage />


    </div>
  );
}

export default App;
