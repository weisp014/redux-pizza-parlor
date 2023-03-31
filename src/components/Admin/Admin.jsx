import { useState, useEffect } from "react"
import axios from "axios";


function AdminPage() {
    useEffect(() => {
        fetchAdminData();
        
    }, [])
    
    const [adminPizzaInfo, setAdminPizzaInfo] = useState([])
    // get request for orders

    const fetchAdminData = () => {

        axios.get('/api/order')
            .then(response => {
                console.log(`response.data:`, response.data);
                setAdminPizzaInfo(response.data)
                
            })
            .catch(error => {
                console.log('error')
            })
    }


    return (
        <>
            <div className="adminHeader">
                <h1>Prime Pizza Orders</h1>
            </div>
            <button onClick={fetchAdminData}>Manually Update</button>
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

                    { adminPizzaInfo.map((line, i) =>
                        <tr key={i}>
                            <td>{line.customer_name}</td>
                            <td>{line.time}</td>
                            <td>{line.type}</td>
                            <td>{line.total}</td>
                        </tr>
                    )}

                </tbody>
            </table>
        </>
    )
}

export default AdminPage