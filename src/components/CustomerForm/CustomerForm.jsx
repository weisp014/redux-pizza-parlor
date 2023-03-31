import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function CustomerForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("delivery");

  // add new customer info to reducer
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, address, city, zip);

    dispatch({
      type: "NEW_CUSTOMER",
      payload: {
        name,
        address,
        city,
        zip,
        deliveryOption,
      },
    });
    // clear inputs
    setName("");
    setAddress("");
    setCity("");
    setZip("");
  };

  const handleDeliveryOption = (event) => {
    setDeliveryOption(event.target.value);
    console.log("delivery option:", event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleZipChange = (event) => {
    setZip(event.target.value);
  };

  const nextHandler = () => {
    history.push('/checkout');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="Street Address"
          />
        </div>
        <div>
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="City"
          />
        </div>
        <div>
          <input
            type="text"
            value={zip}
            onChange={handleZipChange}
            placeholder="Zip"
          />
        </div>
      </div>
      <p>
        <label>
          <input
            type="radio"
            name="deliveryOption"
            value="delivery"
            defaultChecked={true}
            onChange={handleDeliveryOption}
          />
          Delivery
        </label>
        <label>
          <input
            type="radio"
            name="deliveryOption"
            value="takeout"
            onChange={handleDeliveryOption}
          />
          Takeout
        </label>
      </p>
      <button onClick={() => {nextHandler()}} type="submit">NEXT</button>
    </form>
  );
}

export default CustomerForm;
