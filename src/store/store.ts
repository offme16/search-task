import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { searchReducer } from './searchSlice';
import { StateSchema } from './ui/stateSchema';

export function createRootStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        search: searchReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createRootStore>['dispatch'];