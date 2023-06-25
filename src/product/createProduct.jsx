import React from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {createProduct} from "../store/productSlice.js";
import {Label} from "@mui/icons-material";
import Title from "../shared/components/title.jsx";

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
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Title label={'Создание товара'}/>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    gap: 1,
                    maxWidth:'600px'
                }}>
                    <TextField
                        variant={'filled'}
                        {...register('title')}
                        placeholder='Название'
                        size={'small'}
                    />
                    <TextField
                        variant={'filled'}
                        {...register('categories')}
                        placeholder='Категории'
                        size={'small'}
                    />
                    <TextField
                        variant={'filled'}
                        {...register('price')}
                        placeholder='Цена'
                        size={'small'}
                    />
                    <TextField
                        variant={'filled'}
                        {...register('oldPrice')}
                        placeholder='Старая цена'
                        size={'small'}
                    />
                    <TextField
                        variant={'filled'}
                        {...register('tags')}
                        placeholder='Тэги'
                        size={'small'}
                        multiline
                        rows={2}
                    />
                    <TextField
                        variant={'filled'}
                        {...register('image')}
                        placeholder='Изображения'
                        size={'small'}
                    />
                    <TextField
                        variant={'filled'}
                        {...register('advantages')}
                        placeholder='Преимущества'
                        multiline
                        rows={2}
                        size={'small'}
                    />
                    <TextField
                        variant={'filled'}
                        {...register('disAdvantages')}
                        placeholder='Недостатки'
                        multiline
                        rows={2}
                        size={'small'}
                    />
                    <TextField
                        variant={'filled'}
                        {...register('description')}
                        placeholder='Описание'
                        multiline
                        rows={4}
                        size={'small'}
                    />
                    {/*<TextField*/}
                    {/*    {...register('characteristics')}*/}
                    {/*    fullWidth={true}*/}
                    {/*    placeholder='Характеристики'*/}
                    {/*/>*/}
                    <Button
                        type={'submit'}
                        color={'success'}
                        variant={'contained'}
                        fullWidth
                        sx={{my: 1}}
                    >
                        Создать
                    </Button>
                </Box>
            </form>
        </Box>
    )
};

export default CreateProduct;