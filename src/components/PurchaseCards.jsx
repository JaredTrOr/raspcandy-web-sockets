import { FaShoppingCart } from 'react-icons/fa';


function PurchaseCards({purchases}) {

    if(purchases.length === 0) {
        return (
            <div className='no-purchases'>
                <div className='no-purchase-message'>
                    <FaShoppingCart/>
                    <p>Todavia no hay compras :/</p>
                </div>
            </div>
        )
    }

    return (
        <div className="purchase-cards">
            {
                purchases.map((purchase, i) => {
                    return (
                        <div className="card" key={i}>
                            <p>Tipo de dulce: {purchase.candyName}</p>
                            <p>Tamaño: {purchase.size}</p>
                            <p>Fecha de compra: {purchase.dateOfPurchase}</p>
                        </div>
                    )
                })            
            }
        </div>
    )
}

export default PurchaseCards;