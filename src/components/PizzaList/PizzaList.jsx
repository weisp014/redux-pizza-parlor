import { useSelector } from "react-redux"
import PizzaItem from "../PizzaItem/PizzaItem"

function PizzaList() {
    const pizzaList = useSelector(store => store.pizzaList)

   



    // console.log('pizzalist:', pizzaList)
    return (
        <>
            <h2>step 1: Select Your Pizza</h2>


            <div>
                {pizzaList.map((pizza) =>
                <PizzaItem key={pizza.id} pizza={pizza} />
                 
                
            )}
            </div>






        </>
    )
}

export default PizzaList;