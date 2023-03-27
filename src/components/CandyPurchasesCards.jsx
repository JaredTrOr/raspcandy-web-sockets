function CandyPurchasesCards({purchases}) {
    
    const {candyPurchases} = purchases;
    
    if(candyPurchases !== undefined){
    return (
        
        <div className="candy-purchases-cards">
            {
                candyPurchases.map(candyPurchase => {
                    return (
                        <div className="candy-purchase-container">
                            <div className="header-purchase-card">
                                <h4>{candyPurchase.typeOfCandy}</h4>
                            </div>

                            <div className="body-purchase-card">
                                <div className="card-portions">
                                    <p>{candyPurchase.small}</p>
                                    <p>Small</p>
                                </div>

                                <div className="card-portions">
                                    <p>{candyPurchase.medium}</p>
                                    <p>Medium</p>
                                </div>

                                <div className="card-portions">
                                    <p>{candyPurchase.big}</p>
                                    <p>Big</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
        
    );
    }
}

export default CandyPurchasesCards;