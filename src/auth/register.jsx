import React from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import axios from "axios";

const Register = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = async (data) => {
        axios
            .post('http://45.146.166.147:3000/api/auth/register',
                {
                    login: data.login,
                    password: data.password
                }
            )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


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
                <Typography>Введите данные для регистрации</Typography>
                <TextField
                    {...register('login', {required: true})}
                    fullWidth
                    placeholder='Логин'/>
                <TextField
                    {...register('password', {required: true})}
                    fullWidth
                    placeholder='Пароль'/>
                <Button
                    type='submit'
                    fullWidth
                    variant={'contained'}
                >
                    Войти
                </Button>
            </form>
        </Box>
    );
};

export default Register;