import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { AuthorizationErrorCode } from 'shared/const/errors/AuthorizationErrorCode';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    /* let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('login success', async () => {
        const userValue = {
            username: '123',
            id: '1',
        };
        mockedAxios.post.mockReturnValue(
            Promise.resolve({
                data: userValue,
            })
        );
        const action = loginByUsername({
            username: '123',
            password: '123',
        });
        const result = await action(dispatch, getState, undefined);

        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(userValue as unknown as User)
        );
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('login failed with status 403', async () => {
        mockedAxios.post.mockReturnValue(
            Promise.resolve({
                status: 403,
            })
        );
        const action = loginByUsername({
            username: '123',
            password: '123',
        });
        const result = await action(dispatch, getState, undefined);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(
            AuthorizationErrorCode.WrongEmailOrPassword
        );
    }); */
    test('login success', async () => {
        const userValue = {
            username: '123',
            id: '1',
        };
        mockedAxios.post.mockReturnValue(
            Promise.resolve({
                data: userValue,
            })
        );

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({
            username: '123',
            password: '123',
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(userValue as unknown as User)
        );
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('login failed with status 403', async () => {
        mockedAxios.post.mockReturnValue(
            Promise.resolve({
                status: 403,
            })
        );
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({
            username: '123',
            password: '123',
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(
            AuthorizationErrorCode.WrongEmailOrPassword
        );
    });
});