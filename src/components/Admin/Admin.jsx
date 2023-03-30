import { useSelector } from "react-redux"

function AdminPage() {

    const adminCustomerInfo = useSelector(store => store.customerInfo)


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
                        <td>Time Order Placed</td>
                        <td>Pickup</td>
                        <td>$$</td>
                    </tr>
                    <tr>
                        <td>Sample Name 2</td>
                        <td>Time Order Placed 2</td>
                        <td>Delivery 2</td>
                        <td>$$$</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default AdminPage