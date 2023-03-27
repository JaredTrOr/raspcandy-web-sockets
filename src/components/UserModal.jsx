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
            setMessage('Fill all the fields pls >:/')
        }
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
                    <h4 className="message-validation">{message}</h4>
                    <div className="form-row">
                        <input  type="text" value={id} className="input" placeholder="Id" disabled required/>
                    </div>
                    <div className="form-row">
                        <input 
                            onClick={() => setMessage('')}
                            onChange={(e) => setName(e.target.value)}
                            type="text" 
                            value={name} 
                            className="input" 
                            placeholder="Name" required
                        />
                    </div>
                    <div className="form-row">
                        <input 
                            onClick={() => setMessage('')}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text" 
                            value={username} 
                            className="input" 
                            placeholder="Username" required
                        />
                    </div>
                    {
                    user.name === undefined && 
                    <div className="form-row">
                        <input 
                            onClick={() => setMessage('')}
                            onChange={(e) => setPassword(e.target.value)}
                            type="text" 
                            value={password} 
                            className="input" 
                            placeholder="Password" required
                        />
                    </div>
                    }
                    <div className="form-row">
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