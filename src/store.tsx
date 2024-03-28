import { configureStore } from '@reduxjs/toolkit'
import { characterApi } from './services/character'
import { setupListeners } from '@reduxjs/toolkit/query'
import { episodesApi } from './services/episodes'
import { locationsApi } from './services/locations'

export const store = configureStore({
    reducer: {
        [characterApi.reducerPath]: characterApi.reducer,
        [episodesApi.reducerPath]: episodesApi.reducer,
        [locationsApi.reducerPath]: locationsApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(characterApi.middleware, episodesApi.middleware, locationsApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)