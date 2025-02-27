import { createAsyncThunk } from '@reduxjs/toolkit';
import { DataItem } from '../service/type';

export const getPerson = createAsyncThunk<DataItem[], string>(
    'get_person',
    async (data) => {
        try {
            const response = await fetch(`https://dummyjson.com/users/search?q=${data}`);
            const json = await response.json();
            return json.users;
        } catch (e) {
            alert("Ошибка при получении данных");
        }
    },
);
