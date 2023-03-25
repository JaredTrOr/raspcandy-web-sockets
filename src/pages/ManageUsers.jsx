//IMPORTS
import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa'
import ModalComponent from '../components/Modal';
import UserTable from '../components/UserTable';

//STYLES
import  '../styles/Users.css'

//SOCKET CONFIGURATION
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3003');

function ManageUsers() {

    //STATES
    const [userData, setUserData] = useState([]);
    const [userByIdData, setUserByIdData] = useState({});

    //STATE OF THE MODAL
    const [open, setOpen] = useState(false);

    //LISTENING
    useEffect(() => {
        socket.on('server:getActiveUsers', (users) => setUserData(users));
        socket.on('server:getUserById', (user) => {
            console.log(user);
        });
    },[socket]) 

    //EMITING
    const handleOnCreateEditUser = (user) => socket.emit('client:createEditUser', user);
    const handleOnDeleteUser = (id) => socket.emit('client:deleteUser', id);
    const handleOnEditButton = (id) => {
        socket.emit('client:getUserById', id);
        setOpen(true);
    };

    return(
        <div className="main-container">
            <div className="manage-user-container">
                <h1>Manage users</h1>
                
                <button className='btn-p btn-create' onClick={() => setOpen(true)}>
                    <FaPlus/>
                    New user
                </button>

                <UserTable 
                    users={userData} 
                    editButton={handleOnEditButton}
                    deleteButton={handleOnDeleteUser}
                />

                <ModalComponent
                    open={open} 
                    closeButton={setOpen} 
                    createEditButton={handleOnCreateEditUser} 
                />
            </div>
        </div>
    );
}

export default ManageUsers;