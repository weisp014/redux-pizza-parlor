import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

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
    // route to new path
    history.push("/checkout");
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

  return (
    <>
      <h2>Step 2: Customer Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="custFields">
            <input
              className="custInputs"
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Name"
            />
            <input
              className="custInputs"
              type="text"
              value={address}
              onChange={handleAddressChange}
              placeholder="Street Address"
            />
            <input
              className="custInputs"
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="City"
            />
            <input
              className="custInputs"
              type="text"
              value={zip}
              onChange={handleZipChange}
              placeholder="Zip"
            />
        </div>
        <div className="delivOption">
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
        </div>
        <Button variant="contained" type="submit">
          NEXT
        </Button>
      </form>
    </>
  );
}

export default CustomerForm;
