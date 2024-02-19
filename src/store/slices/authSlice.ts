import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchAuth = createAsyncThunk(
    'auth/fetchUserData',
    async (params: any) => {
        const { data } = await axios.post('/auth/login', params);
        return data;
    },
);

const initialState = {
    data: null,
    status: 'idle',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuth.pending, (state) => {
                state.data = null;
                state.status = 'pending';
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchAuth.rejected, (state) => {
                state.data = null;
                state.status = 'failed';
            });
    },
});

export default authSlice.reducer;
