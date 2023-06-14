import {Box, Button, Container} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Auth = () => {
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
            <Box>
                <Button  variant={'contained'} onClick={() => navigate('/login')}>Вход</Button>
                <Button  variant={'contained'} onClick={() => navigate('/register')}>Регистрация</Button>
            </Box>
        </Container>
    )
};

export default Auth;