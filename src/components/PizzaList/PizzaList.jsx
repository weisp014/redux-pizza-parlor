import { useSelector } from "react-redux";
import PizzaItem from "../PizzaItem/PizzaItem";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";

function PizzaList() {
  const pizzaList = useSelector((store) => store.pizzaList);

  const history = useHistory();

  const handleClick = () => {
    history.push("/custInfo");
  };
  return (
    <>
      <h2>Step 1: Select Your Pizza</h2>
      <Grid container spacing={3}>
        {pizzaList.map((pizza) => (
          <PizzaItem key={pizza.id} pizza={pizza} />
        ))}
      </Grid>
      <button onClick={handleClick}>NEXT</button>
    </>
  );
}

export default PizzaList;
