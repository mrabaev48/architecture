import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';
import { LoginSchema } from '../../types/LoginSchema';

describe('getLoginState.test', () => {
    test('should return login object', () => {
        const loginForm: LoginSchema = {
            password: 'qwerty',
            error: '',
            isLoading: false,
            username: 'qwerty',
        };
        const state: DeepPartial<StateSchema> = {
            loginForm,
        };
        expect(getLoginState(state as StateSchema)).toEqual(loginForm);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
