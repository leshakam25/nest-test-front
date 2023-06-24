import {Box, Button, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {authorize} from "../store/authSlice";

const Login = () => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const log = () => {
        dispatch(authorize({login, password}));
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
                maxWidth: 600,
                m: '0 auto'
            }}
        >
            <Typography color={'green'}>Введите данные для авторизации</Typography>
            <TextField
                value={login}
                onChange={(e) => {
                    setLogin(e.target.value);
                }}
                fullWidth={true}
                placeholder='Логин'/>
            <TextField
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                fullWidth={true}
                placeholder='Пароль'/>
            <Button
                onClick={log}
                fullWidth={true}
                variant={'contained'}
            >
                Войти
            </Button>
        </Box>
    );
};

export default Login;