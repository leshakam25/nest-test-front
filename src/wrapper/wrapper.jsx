import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Container} from "@mui/material";

const Wrapper = () => {
    let navigate = useNavigate();

    return (
        <Container sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            gap: 1
        }}>
            <Button variant={'contained'} onClick={() => navigate('/auth')}>Авторизация</Button>
            <Button variant={'contained'} onClick={() => navigate('/products')}>Товары</Button>
        </Container>
    );
};

export default Wrapper;