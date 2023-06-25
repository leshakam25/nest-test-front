import {Box, Button, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {authorize} from "../store/authSlice";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const log = () => {
        dispatch(authorize({login, password}));
        setLogin("");
        setPassword("");
    }
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
            }}
        >
            <TextField
                value={login}
                variant={'standard'}
                size={'small'}
                onChange={(e) => {
                    setLogin(e.target.value);
                }}
                placeholder='Логин'/>
            <TextField
                value={password}
                variant={'standard'}
                size={'small'}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                placeholder='Пароль'/>
            <Button
                onClick={log}
                color={'success'}
                size={'small'}
                variant={'contained'}
            >
                Войти
            </Button>

        </Box>
    );
};

export default Login;