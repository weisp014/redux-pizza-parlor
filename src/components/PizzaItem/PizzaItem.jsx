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
                  {pizza.name} {pizza.description} {pizza.price}<br /> <img width='200rem' src={pizza.image_path} alt="pic of pizza" />           
                   <br /><button onClick ={() => addToCart()}>Add</button>
                   <br />
                   <br />
                  </div>
    </>
)
}

export default PizzaItem