import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { ReducersList } from '../model/types/ReducersList';
import { ReducersListEntry } from '../model/types/ReducersListEntry';

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount = true } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([reducerName, reducer]: ReducersListEntry) => {
                dispatch({ type: `@INIT ${reducerName} reducer` });
                store.reducerManager.add(reducerName, reducer);
            }
        );

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(
                    ([reducerName, reducer]: ReducersListEntry) => {
                        dispatch({ type: `@DESTROY ${reducerName} reducer` });
                        store.reducerManager.remove(reducerName);
                    }
                );
            }
        };
        //  eslint-disable-next-line
    }, []);

    //  eslint-disable-next-line
    return <>{children}</>;
};
