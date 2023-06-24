import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {register} from "../store/authSlice.js";

const Register = () => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const reg = () => {
        dispatch(register({login, password}));
        setLogin("");
        setPassword("");
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
                height: '100vh',
                maxWidth:600,
                margin: "0 auto"
            }}
        >
            <Typography color={"orange"}>Введите данные для регистрации</Typography>
            <TextField
                value={login}
                onChange={(e) => {
                    setLogin(e.target.value);
                }}
                fullWidth
                placeholder='Логин'/>
            <TextField
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                fullWidth
                placeholder='Пароль'/>
            <Button
                onClick={reg}
                fullWidth
                variant={'contained'}
            >
                Войти
            </Button>
        </Box>
    );
};

export default Register;