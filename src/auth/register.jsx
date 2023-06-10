import React from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";

const Register = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = async (data) =>
        fetch("http://91.122.34.11:3000/api/auth/register",
        {
            method: "post",
            mode:"no-cors",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            console.log(JSON.stringify(data));
        });


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