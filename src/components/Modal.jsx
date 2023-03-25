import { Modal, TextField } from "@mui/material";
import '../styles/Modal.css';
import { useRef } from "react";

function ModalComponent({open, closeButton, createEditButton}) {    

    //REF HOOOKS
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

        createEditButton(user);
        closeButton(false);
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
                            onClick={() => closeButton(false)} 
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