import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        cars: [],
    },
    reducers: {
        toggleFavoriteCar: (state, action) => {
            const car = action.payload;
            if (!car || !car.id) return;

            const index = state.cars.findIndex(item => item?.id === car.id);
            if (index !== -1) {
                state.cars.splice(index, 1);
            } else {
                state.cars.push(car);
            }
        },
    },
});

export const { toggleFavoriteCar } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
