import {configureStore} from "@reduxjs/toolkit";
import RepositoriesReducer from "./reducers/repositoriesReducer";

export const store = configureStore({
    reducer: {
        repositories : RepositoriesReducer
    },
    preloadedState: {},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
