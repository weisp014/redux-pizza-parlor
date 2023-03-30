import { useSelector } from "react-redux"

function AdminPage() {

    const adminCustomerInfo = useSelector(store => store.customerInfo)
    // const adminPizzaInfo = useSelector(store => ????)

    return (
        <>
            <div className="adminHeader">
                <h1>Prime Pizza Orders</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time Order Placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{adminCustomerInfo.name}</td>
                        <td>The Dang Future</td>
                        <td>{adminCustomerInfo.deliveryOption}</td>
                        <td>$$$$$$</td>
                    </tr>
                    <tr>
                        <td>Sample Name 2</td>
                        <td>2025</td>
                        <td>Unicycle</td>
                        <td>$$$$$$</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default AdminPage