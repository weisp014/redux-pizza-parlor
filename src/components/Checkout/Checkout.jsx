import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

function Checkout() {
    const dispatch = useDispatch()
    const history = useHistory();

    const checkoutCustomerInfo = useSelector(store => store.customerInfo)
    const checkoutCart = useSelector(store => store.cart)

    const totalPrice = (input) => {
        let sum = 0;
        for (let i=0; i<input.length; i++) {
            sum += Number(input[i].price)
        }
        console.log(`Sum after adds:`, sum);
        return sum
        
    }
    
    let checkoutTotal = totalPrice(checkoutCart);

    const handleCheckout = () => {
        // console.log(`checkoutCustomerInfo`, checkoutCustomerInfo);
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
        // redirect to main page. Not working?
        // history.push('/')
    } // end handleCheckout

    return (
        <>
            <h1>Step 3: Checkout</h1>
            <div>Container for customer info</div>
            <p>{checkoutCustomerInfo.name}<br />
                {checkoutCustomerInfo.address}<br />
                {checkoutCustomerInfo.city}, {checkoutCustomerInfo.zip}</p>



            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {checkoutCart.map((pizza, i) =>
                        <tr key={i}>
                            <td>{pizza.name}</td>
                            <td>${pizza.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div>
                Total: ${totalPrice(checkoutCart)}
            </div>
            <button onClick={handleCheckout}>Checkout</button>
        </>
    )
}

export default Checkout