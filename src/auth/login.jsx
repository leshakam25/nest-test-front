import {Box, Button, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        axios
            .post('http://45.146.166.147:3000/api/auth/login',
                {
                    login: data.login,
                    password: data.password
                }
            )
            .then(function (response) {
                localStorage.setItem("access_token", response.data.access_token);
            })
            .catch(function (error) {
                alert(error.response.data.message);
            });
    }
    const {register, handleSubmit} = useForm();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
                height: '100vh'
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography>Введите данные для авторизации</Typography>
                <TextField
                    {...register('login', {required: true})}
                    fullWidth={true}
                    placeholder='Логин'/>
                <TextField
                    {...register('password', {required: true})}
                    fullWidth={true}
                    placeholder='Пароль'/>
                <Button
                    type='submit'
                    fullWidth={true}
                    variant={'contained'}
                >
                    Войти
                </Button>
            </form>
        </Box>
    );
};

export default Login;