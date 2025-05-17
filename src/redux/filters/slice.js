import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filtersValue: {
        brand: '',
        price: null,
        mileageFrom: null,
        mileageTo: null,
    },
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addFilters(state, action) {
            Object.keys(action.payload).forEach(key => {
                state.filtersValue[key] = action.payload[key];
            });
        },
        resetFilters(state) {
            state.filtersValue = { ...initialState.filtersValue };
        },
    },
});

export const { addFilters, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
