import { ProfileSchema } from '../types/ProfileSchema';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ProfileSchema = {
    isLoading: false,
    data: undefined,
    error: undefined,
    readonly: true,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
