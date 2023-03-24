import { Action, Dispatch, isAnyOf, isFulfilled } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { userActions } from 'entities/User';
import { loginByUsername } from '../../services/loginByUsername/loginByUsername';

interface Store {
    dispatch: Dispatch;
    getState: () => StateSchema;
}

const isLoggedIn = isFulfilled(loginByUsername);
const isLoggedOut = isAnyOf(userActions.logout);

export const AuthMiddleware =
    (store: Store) =>
        (next: (action: Action) => void) =>
            (action: Action): void => {
                if (isLoggedIn(action)) {
                    localStorage.setItem(
                        USER_LOCALSTORAGE_KEY,
                        JSON.stringify(action.payload)
                    );
                }

                if (isLoggedOut(action)) {
                    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
                }

                next(action);
            };
