import { EnhancedStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { ReducerManager } from './ReducerManager';

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
