import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './login.slice';

describe('loginSlice.test', () => {
    /*
     * Just for example.
     * No need write tests for same cases which will change only one property.
     * */
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '123',
        };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('123123')
            )
        ).toEqual({
            username: '123123',
        });
    });

    test('set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('123123')
            )
        ).toEqual({
            password: '123123',
        });
    });
});