import { FaShoppingCart } from 'react-icons/fa';


function PurchaseCards({purchases}) {

    if(purchases.length === 0) {
        return (
            <div className='no-purchases'>
                <div className='no-purchase-message'>
                    <FaShoppingCart/>
                    <p>No purchases yet :/</p>
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
                            <p>Candy name: {purchase.candyName}</p>
                            <p>Size: {purchase.size}</p>
                            <p>Date of purchase: {purchase.dateOfPurchase}</p>
                        </div>
                    )
                })            
            }
        </div>
    )
}

export default PurchaseCards;