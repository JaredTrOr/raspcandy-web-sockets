import { useEffect, useState } from 'react';
import { FaRegEdit, FaTrash, FaPlus } from 'react-icons/fa'
import ModalComponent from '../../components/Modal';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3003');

function ManageUsers() {

    const [userData, setUserData] = useState([]);
    const [open, setOpen] = useState(false);

    //LISTENING
    useEffect(() => {
        socket.on('server:getActiveUsers', (data) => setUserData(data));
    },[socket]) 


    //EMITING
    const handleOnCreateEditUser = (user) => socket.emit('client:createEditUser', user);
    const handleOnDeleteUser = (id) => socket.emit('client:deleteUser', id);

    const sendUserId = (id) => { }

    return(
        <div className="App">
            <h1>Manage users</h1>
            
            <button className='btn-p btn-create' onClick={() => setOpen(true)}>
                <FaPlus/>
                New user
            </button>

            <ModalComponent
                open={open} 
                setOpen={() => setOpen(false)} 
                onCreateEdit={userParamas => handleOnCreateEditUser(userParamas)} 
            />

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Operations</th>
                    </tr>
                </thead>

                <tbody>
                    {userData.map((user,index) => {
                        return (
                            <tr key={index}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <div className='btn-td'>
                                        <button 
                                            className='btn-p btn-edit'
                                            onClick={sendUserId(user._id)}
                                        >
                                            <FaRegEdit/>
                                            Edit
                                        </button> 
                                        
                                        <button 
                                            className='btn-p btn-delete'
                                            onClick={handleOnDeleteUser(user._id)}
                                        >   
                                            <FaTrash/>
                                            Delete
                                        </button> 
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ManageUsers;