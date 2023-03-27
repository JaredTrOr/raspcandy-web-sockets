import { useEffect, useState } from "react";
import { FaShoppingBag, FaUserAlt } from 'react-icons/fa';
import '../styles/Users.css';

//SOCKET CONFIGURATION
import io from 'socket.io-client';
import PurchaseCards from "../components/PurchaseCards";
import CandyPurchasesCards from "../components/CandyPurchasesCards";
const socket = io.connect('http://localhost:3003');

function UserProfile() {
    const [user,setUser] = useState({});
    const [userPurchases, setUserPurchases] = useState([]);
    const [userCandyPurchases, setUserCandyPurchases] = useState({});

    useEffect(() => {
        socket.on('server:getUserById', (userData) => setUser(userData));
        socket.on('server:getUserPurchases', (userPurchasesData) => setUserPurchases(userPurchasesData));
        socket.on('server:getUserCandyPurchases', (userCandyPurchasesData) => {
            console.log(userCandyPurchasesData);
            setUserCandyPurchases(userCandyPurchasesData)
        });

        return () => {
            socket.off('server:getUserById');
            socket.off('server:getUserPurchases');
            socket.off('server:getUserCandyPurchases');
        }
    }, []);


    return (
        <div className="main-container">
            <div className="profile-container">
                <div className="profile-row">
                    <h1>Profile <FaUserAlt/></h1>

                    <div className="user-information-card">
                        <p>Name: {user.name}</p>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                    </div>

                    <h1>History</h1>

                    <div className="user-information-card">
                        <p>Total amount of purchases: {userCandyPurchases.totalAmount}</p>
                        <CandyPurchasesCards purchases={userCandyPurchases}/>
                    </div>
                </div>

                <div className="profile-row purchases">
                    <h1>Purchases <FaShoppingBag/></h1>
                    <PurchaseCards purchases={userPurchases}/>
                </div>
                
            </div>
        </div>
    )
}

export default UserProfile;