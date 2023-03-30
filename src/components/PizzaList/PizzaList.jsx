import { useSelector } from "react-redux"

function PizzaList() {
    const pizzaList = useSelector(store => store.pizzaList)

    console.log('pizzalist:', pizzaList)
    return (
        <>
            <h2>step 1: Select Your Pizza</h2>


            <div>
                {pizzaList.map((pizza, index) =>
                  <div> {pizza.name} {pizza.description} {pizza.price} <img src={pizza.image_path} alt="pic of pizza" /> </div>
                
            )}
            </div>






        </>
    )
}

export default PizzaList;