import { StateSchemaKey } from 'app/providers/StoreProvider/types/StateSchemaKey';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersListEntry = [StateSchemaKey, Reducer];
