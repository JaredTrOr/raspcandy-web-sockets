import { Modal } from "@mui/material";
import '../styles/Modal.css';
import { useEffect, useState } from "react";

function AdminModalComponent({open, closeButton, createEditButton, admin, setAdmin}) {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    //ADRESS 
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [place, setPlace] = useState('');


    useEffect(() => {
        const {_id, name, username, password, email, address} = admin;
        setId(_id);
        setName(name);
        setUsername(username);
        setPassword(password);
        setEmail(email);

        if(address !== undefined) {
            setStreet(address.street);
            setNumber(address.number);
            setPlace(address.place);
        }   


    },[admin]);

    const handleOnClick = (e) => {
        e.preventDefault();

        if(name !== undefined && username !== undefined && 
            password !== undefined && email !== undefined &&
            street !== undefined && number!== undefined && place !== undefined
        ){
            const address = {street,number, place};
            const admin = {id,name,username,password,email, address}
            createEditButton(admin);
            setAdmin({});
            setStreet('');
            setNumber('');
            setPlace('');
            closeButton(false);
        }
        else{
            setMessage('Llena todos los campos porfavor >:/')
        }
    }

    const handleOnClose = () => {
        closeButton(false);
        setAdmin({});
        setStreet('');
        setNumber('');
        setPlace('');
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
                    <h4 className="message-validation">{message}</h4>
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
                            onChange={(e) => setStreet(e.target.value)}
                            type="text" 
                            value={street} 
                            className="input" 
                            placeholder="Calle" required
                        />
                    </div>

                    <div className="form-row">
                        <span>Escriba el número de casa:</span>
                        <input 
                            onClick={() => setMessage('')}
                            onChange={(e) => setNumber(e.target.value)}
                            type="text" 
                            value={number} 
                            className="input" 
                            placeholder="Número" required
                        />
                    </div>

                    <div className="form-row">
                        <span>Escriba el nombre de la comunidad:</span>
                        <input 
                            onClick={() => setMessage('')}
                            onChange={(e) => setPlace(e.target.value)}
                            type="text" 
                            value={place} 
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