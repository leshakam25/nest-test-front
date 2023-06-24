import React from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {createProduct} from "../store/productSlice.js";

const CreateProduct = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    };
    const onSubmit = (data) => {
        dispatch(createProduct({data, headers}))
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
                <Typography variant={'h4'}>
                    Создание товара
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        width: '100%'
                    }}>
                        <TextField
                            {...register('title')}
                            fullWidth
                            placeholder='Название'
                        />
                        <TextField
                            {...register('image')}
                            fullWidth
                            placeholder='Изображение'
                        />
                        <TextField
                            {...register('categories')}
                            fullWidth
                            placeholder='Категории'
                        />
                        <TextField
                            {...register('price')}
                            fullWidth
                            placeholder='Цена'
                        />
                        <TextField
                            {...register('oldPrice')}
                            fullWidth
                            placeholder='Старая цена'
                        />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        width: '100%'
                    }}>
                        <TextField
                            {...register('description')}
                            fullWidth
                            placeholder='Описание'
                        />
                        <TextField
                            {...register('advantages')}
                            fullWidth
                            placeholder='Преимущества'
                        />
                        <TextField
                            {...register('disAdvantages')}
                            fullWidth
                            placeholder='Недостатки'
                        />
                        <TextField
                            {...register('categories')}
                            fullWidth
                            placeholder='Категории'
                        />

                        <TextField
                            {...register('tags')}
                            fullWidth
                            placeholder='Тэги'
                        />
                        {/*<TextField*/}
                        {/*    {...register('characteristics')}*/}
                        {/*    fullWidth={true}*/}
                        {/*    placeholder='Характеристики'*/}
                        {/*/>*/}
                    </Box>
                </Box>
                <Button
                    type={'submit'}
                    variant={'contained'}
                    fullWidth
                    sx={{my: 1}}
                >
                    Создать
                </Button>
            </Box>
        </form>
    )
        ;
};

export default CreateProduct;