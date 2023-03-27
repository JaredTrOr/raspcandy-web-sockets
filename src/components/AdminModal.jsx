import { Modal } from "@mui/material";
import '../styles/Modal.css';
import { useEffect, useState } from "react";

function AdminModalComponent({open, closeButton, createEditButton, admin, setAdmin}) {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState({});
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const {_id, name, username, password, email, address} = admin;
        setId(_id);
        setName(name);
        setUsername(username);
        setPassword(password);
        setAddress(address);
        setEmail(email);
    },[admin]);

    const handleOnClick = () => {

    }

    const handleOnClose = () => {
        closeButton(false);
        setAdmin({});
    }
    
    
    return(
        <Modal 
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="modal-container">
                <form action="" className="form-container">
                    <h1>{admin.name === undefined ? 'Crear administrador' : 'Editar administrador'}</h1>
                    <h4 className="message-validation"></h4>
                    <div className="form-row">
                        <span>Id:</span>
                        <input  type="text" value={id} className="input" placeholder="Id" disabled required/>
                    </div>
                    <div className="form-row">
                        <span>Escribe tu nombre:</span>
                        <input 
                            onClick={() => setMessage('')}
                            onChange={(e) => setName(e.target.value)}
                            type="text" 
                            value={name} 
                            className="input" 
                            placeholder="Nombre" required
                        />
                    </div>
                    <div className="form-row">
                        <span>Escribe tu usuario:</span>
                        <input 
                            onClick={() => setMessage('')}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text" 
                            value={username} 
                            className="input" 
                            placeholder="Usuario" required
                        />
                    </div>
                    {
                    admin.name === undefined && 
                    <div className="form-row">
                        <span>Escribe tu contraseña:</span>
                        <input 
                            onClick={() => setMessage('')}
                            onChange={(e) => setPassword(e.target.value)}
                            type="text" 
                            value={password} 
                            className="input" 
                            placeholder="Contraseña" required
                        />
                    </div>
                    }
                    <div className="form-row">
                        <span>Escriba tu email:</span>
                        <input 
                            onClick={() => setMessage('')}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" 
                            value={email} 
                            className="input" 
                            placeholder="Email" required
                        />
                    </div>

                    <div className="form-row">
                        <span>Escriba la calle de la comunidad:</span>
                        <input 
                            onClick={() => setMessage('')}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text" 
                            value={email} 
                            className="input" 
                            placeholder="Calle" required
                        />
                    </div>

                    <div className="form-row">
                        <span>Escriba el número de casa:</span>
                        <input 
                            onClick={() => setMessage('')}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" 
                            value={email} 
                            className="input" 
                            placeholder="Número" required
                        />
                    </div>

                    <div className="form-row">
                        <span>Escriba el nombre de la comunidad:</span>
                        <input 
                            onClick={() => setMessage('')}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" 
                            value={email} 
                            className="input" 
                            placeholder="Comunidad" required
                        />
                    </div>

                    <div className="form-row-btn">
                        <button 
                            onClick={handleOnClose} 
                            className='btn-p btn-cancel'
                        >
                            Canelar
                        </button>

                        <button 
                            onClick={handleOnClick} 
                            className='btn-p btn-create'
                        >
                            {admin.name === undefined ? 'Crear' : 'Editar'}
                        </button>
                    </div>

                </form>
            </div>
        </Modal>
    );
}

export default AdminModalComponent;