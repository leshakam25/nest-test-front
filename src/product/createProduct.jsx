import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import axios from "axios";

const CreateProduct = () => {
    const {register, handleSubmit} = useForm();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    };
    // const onSubmit = async (data) => {
    //     console.log(JSON.stringify(
    //         data
    //     ))};

    const onSubmit = async (data) => {
        axios
            .post('http://45.146.166.147:3000/api/product/create',
                {
                    data: JSON.stringify(data)
                },
                {headers: headers}
            )
            .then(function (response) {
                console.log(response)
                alert("Success");
            })
            .catch(function (error) {
                alert(error.response.data.message);
            });
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
                <TextField
                    {...register('title', {required: true})}
                    fullWidth={true}
                    placeholder='Название'
                />
                <TextField
                    {...register('image', {required: true})}
                    fullWidth={true}
                    placeholder='Изображение'
                />
                <TextField
                    {...register('categories', {required: true})}
                    fullWidth={true}
                    placeholder='Категории'
                />
                <TextField
                    {...register('price', {required: true})}
                    fullWidth={true}
                    placeholder='Цена'
                />
                <TextField
                    {...register('oldPrice', {required: true})}
                    fullWidth={true}
                    placeholder='Старая цена'
                />
                <TextField
                    {...register('description', {required: true})}
                    fullWidth={true}
                    placeholder='Описание'
                />
                <TextField
                    {...register('advantages', {required: true})}
                    fullWidth={true}
                    placeholder='Преимущества'
                />
                <TextField
                    {...register('disAdvantages', {required: true})}
                    fullWidth={true}
                    placeholder='Недостатки'
                />

                <Button
                    type='submit'
                    fullWidth={true}
                    variant={'contained'}
                >
                    Создать
                </Button>
            </Box>
        </form>
    );
};

export default CreateProduct;