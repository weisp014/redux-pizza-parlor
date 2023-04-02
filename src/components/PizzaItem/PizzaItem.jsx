import { useState } from "react";
import { useDispatch } from "react-redux";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function PizzaItem({ pizza }) {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);

  const addToCart = () => {
    setToggle(!toggle);
    dispatch({
      type: "ADD_TO_CART",
      payload: pizza,
    });
  };

  const removeFromCart = () => {
    setToggle(!toggle);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: pizza,
    });
  };

  return (
    <Grid item xs={12} sm={4} md={3} lg={2}>
      <Card key={pizza.id}>
        <CardMedia
          component="img"
          alt="pizza"
          height="140"
          image={pizza.image_path}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pizza.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pizza.description} ${pizza.price}
          </Typography>
        </CardContent>
        <CardActions>
          {toggle ? (
            <Button size="large" onClick={() => addToCart()}>
              Add
            </Button>
          ) : (
            <Button size="large" onClick={() => removeFromCart()}>
              Remove
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default PizzaItem;
