import React from 'react';
import axios from 'axios';
import './App.css';
import CustomerForm from '../CustomerForm/CustomerForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PizzaList from '../PizzaList/PizzaList';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom'

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




  // confirm stores for customer info, pizzas selected/in cart. These will be used in
  // newOrder, below, as well as rendering the checkout page (one or both?)
  const checkoutCustomerInfo = useSelector(store => store.customerInfo)
  const checkoutPizzaInfo = useSelector(store => store.pizzaInfo)

  const dispatch = useDispatch();
  const history = useHistory();

  // DAVID'S STUFF
  const handleCheckout = () => {
    
    
    const newOrder = {
      customer_name: "Donatello",
      street_address: "20 W 34th St",
      city: "New York",
      zip: "10001",
      total: "27.98",
      type: "Pickup",
      // these are really irrelevant pre-stretch goals.
      pizzas: [{
        id: '1',
        quantity: '1'
      }, {
        id: '2',
        quantity: '1'
      }]
    }

    // POST route to add order information to DB
    axios.post('/api/order', newOrder)
      .then(response => {
        // action?
      })
      .catch(err => {
        console.log(`Error`, err);
      })

      // dispatch to clear out reducers
    dispatch({
      type: 'CHECKOUT',
      payload: []
    })
    history.push('/')
  } // end handleCheckout

  return (
    <>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      </div>
      {/* Get pizza list and display */}
      <PizzaList />

      {/* Customer Form */}
      <CustomerForm />
      {/* Checkout */}

      <h1>Step 3: Checkout</h1>
      <div>Container for customer info</div>
      <p>Customer Info, address, etc</p>
      <p>On right side - delivery/pickup</p>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name of Pizza #1</td>
          <td>cost of Pizza #1</td>
        </tr>
        <tr>
          <td>name of pizza #2</td>
          <td>cost of pizza #2</td>
        </tr>
      </tbody>
      </table>
      <div>
        Total: $TotalGoesHere
      </div>
      <button onClick={handleCheckout}>Checkout</button>

      {/* Admin */}

      {/* <div className="adminHeader">
        <h1>Prime Pizza Orders</h1>
      </div>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Time Order Placed</th>
          <th>Type</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sample Name</td>
          <td>Time Order Placed</td>
          <td>Pickup</td>
          <td>$$</td>
        </tr>
        <tr>
          <td>Sample Name 2</td>
          <td>Time Order Placed 2</td>
          <td>Delivery 2</td>
          <td>$$$</td>
        </tr>
      </tbody>
      </table> */}

      {/* <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p> */}
    </>
  );
}

export default App;
