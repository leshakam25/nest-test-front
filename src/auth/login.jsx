import {Box, Button, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";

const Login = () => {

    // const onSubmit = data => console.log(data);
    const onSubmit = async (data) => {};
    const {register, handleSubmit} = useForm();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
                height:'100vh'
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