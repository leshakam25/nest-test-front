import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: null,
        error: null
    },
    reducers: {
        authorize(state, action) {
            axios
                .post('http://45.146.166.147:3000/api/auth/login',
                    {
                        login: action.payload.login,
                        password: action.payload.password
                    }
                )
                .then(function (response) {
                    alert("Success");
                    localStorage.setItem("access_token", response.data.access_token);
                })
                .catch(function (error) {
                    alert(error.response.data.message);
                });
        },
        register(state, action) {
            axios
                .post('http://45.146.166.147:3000/api/auth/register',
                    {
                        login: action.payload.login,
                        password: action.payload.password
                    }
                )
                .then(function () {
                    alert("Success");
                })
                .catch(function (error) {
                    alert(error.response.data.message);
                });
        }
    }
})

export const { authorize, register } =
    authSlice.actions;
export default authSlice.reducer;