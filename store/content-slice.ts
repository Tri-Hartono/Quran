import { SurahType } from '@/types/Surah';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ErrorFetchDataResponse } from '@/types/type';
import axios, { AxiosError } from 'axios';

export const fetchSurat = createAsyncThunk<
    SurahType,
    null,
    { rejectValue: ErrorFetchDataResponse }
>('data/fetch-surah', async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get('https://equran.id/api/v2/surat');
        return res.data;
    } catch (err) {
        const error = err as AxiosError<ErrorFetchDataResponse>;
        if (!error.response) {
            throw error;
        }
        return rejectWithValue(error.response.data);
    }
});

interface State {
    surat: SurahType | undefined;
    currentContentType: string;
    status: string;
    error: undefined | object;
}

const initialState: State = {
    surat: undefined,
    currentContentType: 'surat',
    status: 'idle',
    error: undefined,
};

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setCurrentType(state, action) {
            state.currentContentType = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchSurat.pending, (state) => {
                state.status = 'loading';
                state.surat = undefined;
                state.error = undefined;
            })
            .addCase(fetchSurat.fulfilled, (state, action) => {
                state.surat = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchSurat.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            });
    },
});

export const { setCurrentType } = contentSlice.actions;
export default contentSlice.reducer;
