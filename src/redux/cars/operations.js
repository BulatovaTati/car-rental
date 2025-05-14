import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const getAllCars = createAsyncThunk('getAllCars', async ({ brand, rentalPrice, minMileage, maxMileage, limit, page }, thunkAPI) => {
    try {
        const { data } = await axios('cars', {
            params: { brand, rentalPrice, minMileage, maxMileage, limit, page },
        });
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const getCarsBrands = createAsyncThunk('getCarsBrands', async (_, thunkAPI) => {
    try {
        const { data } = await axios('brands');
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const getCarDetails = createAsyncThunk('getCarDetails', async (id, thunkAPI) => {
    try {
        const { data } = await axios(`cars/${id}`);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});
