//IMPORTS
import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa'
import UserModalComponent from '../components/UserModal';
import UserTable from '../components/UserTable';

//STYLES
import  '../styles/Users.css'

//SOCKET CONFIGURATION
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3003');


function ManageUsers() {

    const [userData, setUserData] = useState([]);
    const [userByIdData, setUserByIdData] = useState({});
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const socket = io.connect('http://localhost:3003');

        socket.on('server:getActiveUsers', (users) => setUserData(users));
        socket.on('server:getUserById', (user) => setUserByIdData(user));

        return () => {
            socket.off('server:getActiveUsers');
            socket.off('server:getUserById');
        }

    }, []);

    //EMITING
    const handleOnCreateEditUser = (user) => socket.emit('client:createEditUser', user);
    const handleOnDeleteUser = (id) => socket.emit('client:deleteUser', id);
    const handleOnProfileButton = (id) => {
        socket.emit('client:getUserById', id);
        socket.emit('client:getUserPurchases', id);
        socket.emit('client:getUserCandyPurchases', id);
    }
    const handleOnEditButton = (id) => {
        socket.emit('client:getUserById', id);
        setOpen(true);
    };

    return(
        <div className="main-container">
            <div className="manage-user-admin-container">
                <h1>Manage users</h1>
                
                <button className='btn-p btn-create' onClick={() => setOpen(true)}>
                    <FaPlus/>
                    New user
                </button>

                <div className='table-container'>
                    <UserTable 
                        users={userData} 
                        editButton={handleOnEditButton}
                        deleteButton={handleOnDeleteUser}
                        profileButton={handleOnProfileButton}
                    />
                </div>

                <UserModalComponent
                    open={open} 
                    closeButton={setOpen} 
                    createEditButton={handleOnCreateEditUser} 
                    user={userByIdData}
                    setUser={setUserByIdData}
                />
            </div>
        </div>
    );
}

export default ManageUsers;