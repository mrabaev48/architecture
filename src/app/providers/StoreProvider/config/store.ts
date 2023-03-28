import {
    configureStore,
    DeepPartial,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { AuthMiddleware } from 'features/AuthByUsername';
import { createReducerManager } from 'app/providers/StoreProvider/config/createReducerManager';
import { StateSchema } from '../types/StateSchema';

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        // @ts-ignore
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(AuthMiddleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};
