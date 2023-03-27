import { Modal } from "@mui/material";
import '../styles/Modal.css';
import { useEffect, useState } from "react";

function ModalComponent({open, closeButton, createEditButton, user, setUser}) {
    
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const {_id, name, username, password, email} = user;
        setId(_id);
        setName(name);
        setUsername(username);
        setPassword(password);
        setEmail(email);
    },[user]);
    
    const handleOnClick = (e) => {
        e.preventDefault();
        if(name !== undefined && username !== undefined && password !== undefined && email !== undefined){
            const user = {id,name,username,password,email}
            createEditButton(user);
            setUser({});
            closeButton(false);
        }
        else{
            setMessage('Llena todos los campos porfavor >:/')
        }
    }

    const handleOnClose = () => {
        closeButton(false);
        setMessage('');
        setUser({});
    }

    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="modal-container">
                <form action="" className="form-container">
                    <h1>{user.name === undefined ? 'Crear usuario' : 'Editar usuario'}</h1>
                    <h4 className="message-validation">{message}</h4>
                    <div className="form-row">
                        <span>Id:</span>
                        <input  type="text" value={id} className="input" placeholder="Id" disabled required/>
                    </div>
                    <div className="form-row">
                        <span>Escriba su nombre: </span>
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
                        <span>Escriba su usuario</span>
                        <input 
                            onClick={() => setMessage('')}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text" 
                            value={username} 
                            className="input" 
                            placeholder="usuario" required
                        />
                    </div>
                    {
                    user.name === undefined && 
                    <div className="form-row">
                        <span>Escriba su contraseña</span>
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
                        <span>Escriba su e-mail:</span>
                        <input 
                            onClick={() => setMessage('')}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" 
                            value={email} 
                            className="input" 
                            placeholder="Email" required
                        />
                    </div>
                    <div className="form-row-btn">
                        <button 
                            onClick={handleOnClose} 
                            className='btn-p btn-cancel'
                        >
                            Cancelar
                        </button>

                        <button 
                            onClick={handleOnClick} 
                            className='btn-p btn-create'
                        >
                            {user.name === undefined ? 'Crear' : 'Editar'}
                        </button>
                    </div>    
                </form> 
            </div>
        </Modal>
    );
}

export default ModalComponent;