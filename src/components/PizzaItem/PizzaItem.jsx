import { useDispatch } from "react-redux"


function PizzaItem({pizza}){

const dispatch = useDispatch();

    const addToCart = () => {
        console.log('Pizzaitem comp')
        dispatch({
            type: 'ADD_TO_CART', 
            payload: pizza
        })
    }


return(
    <>
     <div key={pizza.id}> 
                  {pizza.name} {pizza.description} {pizza.price} <img src={pizza.image_path} alt="pic of pizza" />           
                   <button onClick ={() => addToCart()}>Add</button>
                  </div>
    </>
)
}

export default PizzaItem