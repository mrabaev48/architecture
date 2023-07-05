import axios from 'axios';
import { User, userActions } from 'entities/User';
import { AuthorizationErrorCode } from 'shared/const/errors/AuthorizationErrorCode';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
describe('loginByUsername.test', () => {
    test('success login', async () => {
        const userValue: Partial<User> = {
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
            password: '123',
            username: '123',
        });

        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(userValue as User)
        );
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(
            Promise.resolve({
                status: 403,
            })
        );
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({
            password: '123',
            username: '123',
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(
            AuthorizationErrorCode.WrongEmailOrPassword
        );
    });
});
