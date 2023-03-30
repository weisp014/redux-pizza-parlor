import { useSelector } from "react-redux"

function PizzaList() {
    const pizzaList = useSelector(store => store.pizzaList)

console.log('pizzalist:', pizzaList)
    return (
        <>
        <h2>step 1: Select Your Pizza</h2>
        <ul>
            {pizzaList.map((pizza, index) =>
            <li key={index}>{pizza.name} </li>
            )}
        </ul>
        </>
    )
}

export default PizzaList