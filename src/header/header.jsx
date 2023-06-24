import React from 'react';
import {Box, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                height: 60,
                bgcolor: "lightgray",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 2
            }}
        >
            <Button variant={'outlined'} onClick={() => navigate('/login')}>Вход</Button>
            <Button variant={'outlined'} onClick={() => navigate('/register')}>Регистрация</Button>
            <Button variant={'outlined'} onClick={() => navigate('/products')}>Товары</Button>
        </Box>
    );
};

export default Header;