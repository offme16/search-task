import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { searchReducer } from '';
import { StateSchema } from './stateSchema';

export function createRootStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        searchResult: searchReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createRootStore>['dispatch']