import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axiosConfig';

export const fetchAuth = createAsyncThunk(
    'auth/fetchAuth',
    async (params: any) => {
        const { data } = await axios.post('/auth/login', params);
        return data;
    },
);

export const fetchAuthMe = createAsyncThunk('auth/fetchMe', async () => {
    const { data } = await axios.get('/auth/me');
    return data.userData;
});

const initialState = {
    data: null,
    status: 'idle',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
            state.status = 'idle';
        },
    },
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
            })
            .addCase(fetchAuthMe.pending, (state) => {
                state.data = null;
                state.status = 'pending';
            })
            .addCase(fetchAuthMe.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchAuthMe.rejected, (state) => {
                state.data = null;
                state.status = 'failed';
            });
    },
});

export const selectIsAuth = (state: any) => Boolean(state.voicefy.auth.data);

export const { logout } = authSlice.actions;

export default authSlice.reducer;
