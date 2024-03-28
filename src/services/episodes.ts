import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Episodes } from './types'

export const episodesApi = createApi({
    reducerPath: 'episodesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    endpoints: (builder) => ({
        getEpisodes: builder.query<Episodes, string>({
            query: () => `episode`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEpisodesQuery } = episodesApi