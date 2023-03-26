function PurchaseCards({purchases}) {

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