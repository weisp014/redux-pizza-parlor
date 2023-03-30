import { useSelector } from "react-redux"
import PizzaItem from "../PizzaItem/PizzaItem"
import { useHistory } from 'react-router-dom';


function PizzaList() {
    const pizzaList = useSelector(store => store.pizzaList)

   const history = useHistory();

   const handleClick = () => {
    history.push('/custInfo')
   }

    // console.log('pizzalist:', pizzaList)
    return (
        <>
            <h2>Step 1: Select Your Pizza</h2>


            <div>
                {pizzaList.map((pizza) =>
                <PizzaItem key={pizza.id} pizza={pizza} />
                 
                
            )}
            </div>

                <button onClick={handleClick}>NEXT</button>




        </>
    )
}

export default PizzaList;