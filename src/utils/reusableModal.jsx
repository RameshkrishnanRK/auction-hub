import React from "react";
import { Modal, Box, Button } from "@mui/material";

const ReusableModal = ({open, onClose, onSubmit, bodyContent }) => {

    const styleBid = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius :'4px',
        boxShadow: 24,
        p: 4,
      };

    return (
        <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
                >
                <Box sx={styleBid}>
                {bodyContent}
                
                <Box sx={{mt:'25px',display:'flex', justifyContent:'end'}}>
                        <Button variant='outlined' onClick={onClose}>Cancel</Button>
                        <Button style={{backgroundColor:'#3CA93A', color:'#ffffff', marginLeft:'10px'}} onClick={onSubmit}>Submit</Button>
                </Box>
                </Box>
                
        </Modal>
    )
}

export default ReusableModal;