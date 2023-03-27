//IMPORTS
import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa'
import AdminModalComponent from '../components/AdminModal';
import AdminTable from '../components/AdminTable';

//STYLES
import  '../styles/Users.css'

//SOCKET CONFIGURATION
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3003');

function ManageAdministrators() {

    const [adminData, setAdminData] = useState([]);
    const [adminByIdData, setAdminByIdData] = useState({});
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const socket = io.connect('http://localhost:3003');

        socket.on('server:getAdmins', (admins) => setAdminData(admins));
        socket.on('server:getAdminById', (admin) => setAdminByIdData(admin));

        return () => {
            socket.off('server:getAdmins');
            socket.off('server:getAdminById');
        }

    }, []);

    //EMITING
    const handleOnCreateEditAdmin = (admin) => socket.emit('client:createEditAdmin', admin); 
    const handleOnDeleteAdmin = (id) => socket.emit('client:deleteAdmin', id);
    const handleOnEditButton = (id) => {
        socket.emit('client:getAdminById', id);
        setOpen(true);
    }

    return (
        <div className="main-container">
            <div className="manage-user-admin-container">
                <h1>Manejo de administradores</h1>

                <button className='btn-p btn-create' onClick={() => setOpen(true)}>
                    <FaPlus/>
                    Crear administrador
                </button>

                <div className="table-container">
                    <AdminTable
                        admins={adminData}
                        editButton={handleOnEditButton}
                        deleteButton={handleOnDeleteAdmin}
                    />
                </div>

                <AdminModalComponent 
                    open={open} 
                    closeButton={setOpen} 
                    createEditButton={handleOnCreateEditAdmin} 
                    admin={adminByIdData}
                    setAdmin={setAdminByIdData}
                />
            </div>
        </div>
    );
}

export default ManageAdministrators;