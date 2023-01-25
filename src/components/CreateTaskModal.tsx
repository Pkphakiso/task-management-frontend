import React from 'react';
import Modal from '@mui/material/Modal/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material';


interface Props {
    open: boolean;
    closeModal: () => void;
}
// function getModalStyle(){
//     const top = 50;
//     const left = 50;

//     return {
//         top : `${top}`,
//         left: `${left}`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }


const CreateTaskModal = ( prop: Props ) => {
    return(
        <div className='modalBackground'>
         
            <div className='modalContainer'>
                <button onClick={prop.closeModal}> X </button>
                <div className='title'>
                    <h1> are you sure you want to continue</h1>
                </div>
                <div className='body'>
                    <p> the next page is awesome you should enjoy it</p>
                </div>
                <div className='footer'>
                    <button>Cancel</button>
                    <button> continue</button>
                </div>
            </div>
            
        </div>
    );
}


export default CreateTaskModal;