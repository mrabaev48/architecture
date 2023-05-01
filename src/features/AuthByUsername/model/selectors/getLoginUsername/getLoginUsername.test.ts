import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return qwerty', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'qwerty',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('qwerty');
    });
    test('should return empty string', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
