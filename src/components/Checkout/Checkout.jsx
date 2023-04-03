import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";

function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();

  const checkoutCustomerInfo = useSelector((store) => store.customerInfo);
  const checkoutCart = useSelector((store) => store.cart);

  const totalPrice = (input) => {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
      sum += Number(input[i].price);
    }
    return sum;
  };
  let checkoutTotal = totalPrice(checkoutCart);

  const handleCheckout = () => {
    console.log(`checkoutPizzaInfo`, checkoutCart);
    // confirm stores for customer info, pizzas selected/in cart. These will be used in
    // newOrder, below, as well as rendering the checkout page (one or both?)

    const newOrder = {
      customer_name: checkoutCustomerInfo.name,
      street_address: checkoutCustomerInfo.address,
      city: checkoutCustomerInfo.city,
      zip: checkoutCustomerInfo.zip,
      total: checkoutTotal,
      type: checkoutCustomerInfo.deliveryOption,
      pizzas: [
        {
          id: "1",
          quantity: "1",
        },
        {
          id: "2",
          quantity: "1",
        },
      ],
    };

    // POST route to add order information to DB
    axios
      .post("/api/order", newOrder)
      .then((response) => {
        // dispatch to clear out reducers
        dispatch({
          type: "CHECKOUT",
          payload: [],
        });
        // redirect to main page. Not working?
        history.push("/");
      })
      .catch((err) => {
        console.log(`Error`, err);
      });
  }; // end handleCheckout

  return (
    <>
      <header className="App-header">
        <div className="title-combo">
          <h1 className="App-title">Prime Pizza</h1>
        </div>
      </header>
      <h1>Step 3: Checkout</h1>
      <p>
        {checkoutCustomerInfo.name}
        <br />
        {checkoutCustomerInfo.address}
        <br />
        {checkoutCustomerInfo.city}, {checkoutCustomerInfo.zip}
      </p>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {checkoutCart.map((pizza, i) => (
            <tr key={i}>
              <td>{pizza.name}</td>
              <td>${pizza.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total2">Total: ${checkoutTotal}</div>
      <Button variant="contained" onClick={handleCheckout}>
        Checkout
      </Button>
    </>
  );
}

export default Checkout;
