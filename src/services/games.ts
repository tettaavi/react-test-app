import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Games } from './types'
// Define a service using a base URL and expected endpoints
export const gamesApi = createApi({
    reducerPath: 'gamesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://v2.nba.api-sports.io/' }),
    endpoints: (builder) => ({
        getGames: builder.query<Games, string>({
            query: () => `games?date=2022-03-09`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGamesQuery } = gamesApi