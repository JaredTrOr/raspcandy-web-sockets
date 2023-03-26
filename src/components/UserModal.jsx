import { Modal } from "@mui/material";
import '../styles/Modal.css';
import { useEffect, useRef, useState } from "react";

function ModalComponent({open, closeButton, createEditButton, user, setUser}) {
    
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    useEffect(() => {
        const {_id, name, username, password, email} = user;
        setId(_id);
        setName(name);
        setUsername(username);
        setPassword(password);
        setEmail(email);
    },[user]);
    
    //REF HOOOKS
    const idRef = useRef();
    const nameRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();
    
    const handleOnClick = (e) => {
        e.preventDefault();
        const user = {id,name,username,password,email}
        createEditButton(user);
        setUser({});
        closeButton(false);
    }

    const handleOnClose = () => {
        closeButton(false)
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
                    <h1>{user.name === undefined ? 'Create user' : 'Edit user'}</h1>
                    <div className="form-row">
                        <input  type="text" ref={idRef} value={id} className="input" placeholder="Id" disabled required/>
                    </div>
                    <div className="form-row">
                        <input 
                            onChange={(e) => setName(e.target.value)}
                            type="text" 
                            ref={nameRef} 
                            value={name} 
                            className="input" 
                            placeholder="Name" required
                        />
                    </div>
                    <div className="form-row">
                        <input 
                            onChange={(e) => setUsername(e.target.value)}
                            type="text" 
                            ref={usernameRef} 
                            value={username} 
                            className="input" 
                            placeholder="Username" required
                        />
                    </div>
                    <div className="form-row">
                        <input 
                            onChange={(e) => setPassword(e.target.value)}
                            type="text" 
                            ref={passwordRef} 
                            value={password} 
                            className="input" 
                            placeholder="Password" required
                        />
                    </div>
                    <div className="form-row">
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" 
                            ref={emailRef} 
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
                            Cancel
                        </button>

                        <button 
                            onClick={handleOnClick} 
                            className='btn-p btn-create'
                        >
                            {user.name === undefined ? 'Create' : 'Edit'}
                        </button>
                    </div>    
                </form> 
            </div>
        </Modal>
    );
}

export default ModalComponent;