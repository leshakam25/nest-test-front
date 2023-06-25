import React from "react";
import {
    Avatar,
    Box,
    Button,
    Container,
    Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemButton,
    ListItemText, Modal, Typography
} from "@mui/material";
import Login from "./login.jsx";
import Register from "./register.jsx";

const Auth = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        bgcolor: 'background.paper',
        p: 4,
        height:'auto',
        border:'none',
        borderRadius:'4px'
    };
    const [token, setToken] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "auto",
            gap: 1
        }}>
                <Login/>
                <Button
                    color={'warning'}
                    onClick={handleOpen}
                    size={'small'}
                    variant={'contained'}
                >
                    Регистрация
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Register/>
                    </Box>
                </Modal>
        </Box>
    )
};

export default Auth;