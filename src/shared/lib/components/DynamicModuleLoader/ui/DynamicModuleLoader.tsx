import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/types/StateSchemaKey';
import { ReducersList } from '../model/types/ReducersList';

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount = true } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerName, reducer]) => {
            dispatch({ type: `@INIT ${reducerName} reducer` });
            store.reducerManager.add(reducerName as StateSchemaKey, reducer);
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerName, reducer]) => {
                    dispatch({ type: `@DESTROY ${reducerName} reducer` });
                    store.reducerManager.remove(reducerName as StateSchemaKey);
                });
            }
        };
        //  eslint-disable-next-line
    }, []);

    //  eslint-disable-next-line
    return <>{children}</>;
};
