import { StateSchemaKey } from 'app/providers/StoreProvider/types/StateSchemaKey';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};
