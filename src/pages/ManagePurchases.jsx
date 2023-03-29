import { useEffect, useState } from "react"

import '../styles/Purchase.css';

//SOCKET CONFIGURATION
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3003');


function ManagePurchases() {

    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const socket = io.connect('http://localhost:3003');
        socket.on('server:getPurchases', (purchaseData) => setPurchases(purchaseData));
    }, [])

    return (
        <div className="main-container">
            <div className="manage-user-admin-container">
                <h1>Compras</h1>
                <div className="purchase-container">
                {
                    purchases.map(purchase => {
                        return (
                            <div className="purchase-card">
                                <p>Tipo de dulce: {purchase.candyName}</p>
                                <p>Id del usuario: {purchase.userId}</p>
                                <p>Fecha de compra: {purchase.dateOfPurchase}</p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default ManagePurchases