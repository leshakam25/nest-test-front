import React from 'react';
import {Box, Button, ButtonGroup, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Auth from "../auth/auth.jsx";
import {Label} from "@mui/icons-material";

const Header = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                height: 60,
                bgcolor: "lightgray",
                display: "flex",
                alignItems: 'center'
            }}
        >
            <Container
                maxWidth={'xl'}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2
                }}
            >
                <ButtonGroup
                    variant={'contained'}
                    size={'small'}
                >
                    <Button onClick={()=>navigate('createproduct')}>Добавление</Button>
                    <Button onClick={()=>navigate('/listproducts')}>Найти</Button>
                    <Button>Удаление</Button>
                </ButtonGroup>
                <Auth/>
            </Container>
        </Box>
    );
};

export default Header;