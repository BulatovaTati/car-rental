import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const getAllCars = createAsyncThunk('getAllCars', async (page, thunkAPI) => {
    try {
        const pageNumber = Number(page);

        const { data } = await axios.get(`/cars?page=${pageNumber}&limit=12`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch cars');
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
