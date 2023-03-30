import { useSelector } from "react-redux"


function HeaderWithCart() {
    const cart = useSelector(store => store.cart)

    const calculateTotal = () => {
        let total = 0
        cart.map((item) => {
            total += Number(item.price)
            console.log('looking at item price', total)

        }
        )
        return total
    }

    return (
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
            <h3>Total: {calculateTotal()}</h3>
        </header>
    )
}

export default HeaderWithCart