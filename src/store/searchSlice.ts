import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPerson } from '../asynkThunk/currencyAsyncThunk';
import { searchSchema } from './service/type';

const initialState: searchSchema = {
    result: undefined,
    error: undefined,
    isLoading: false,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPerson.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getPerson.fulfilled, (state, action) => {
                state.isLoading = false;
                state.result = action.payload;
            })
            .addCase(getPerson.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: searchActions } = searchSlice;
export const { reducer: searchReducer } = searchSlice;