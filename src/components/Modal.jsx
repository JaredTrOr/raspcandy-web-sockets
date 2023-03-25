import { Modal, TextField } from "@mui/material";
import '../styles/Modal.css';
import { useRef } from "react";

//CODIGO SUCIO
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3003');

function ModalComponent({open, setOpen, onCreateEdit}) {

    const idRef = useRef();
    const nameRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();

    const handleOnClick = (e) => {
        e.preventDefault();
        const user = {
            id: idRef.current.value,
            name: nameRef.current.value,
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value
        }

        console.log(user);
        //CODIGO SUCIO WTF
        socket.emit('client:createEditUser', user);
        setOpen();
    }

    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="modal-container">
                <form action="" className="form-container">
                    <h1>Create user</h1>
                    <div className="form-row">
                        <TextField inputRef={idRef} id="outlined-basic" label="Id" variant="outlined" disabled/>
                    </div>
                    
                    <div className="form-row">
                        <TextField inputRef={nameRef} id="outlined-basic" color="secondary" label="Name" variant="outlined"/>
                    </div>

                    <div className="form-row">
                        <TextField inputRef={usernameRef} id="outlined-basic" color="secondary" label="Username" variant="outlined"/>
                    </div>

                    <div className="form-row">
                        <TextField inputRef={passwordRef} id="outlined-basic" color="secondary" label="Password" variant="outlined"/>
                    </div>

                    <div className="form-row">
                        <TextField inputRef={emailRef} id="outlined-basic" color="secondary" label="Email" variant="outlined"/>
                    </div>

                    <div className="form-row-btn">
                        <button 
                            onClick={setOpen} 
                            className='btn-p btn-cancel'
                        >
                            Cancel
                        </button>

                        <button 
                            onClick={handleOnClick} 
                            className='btn-p btn-create'
                        >
                            Create
                        </button>
                    </div>    
                </form> 
            </div>
        </Modal>
    );
}

export default ModalComponent;