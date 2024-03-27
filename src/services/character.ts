import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Characters } from './types'

// Define a service using a base URL and expected endpoints
export const characterApi = createApi({
    reducerPath: 'characterApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    endpoints: (builder) => ({
        getcharacter: builder.query<Characters, string>({
            query: () => `character`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetcharacterQuery } = characterApi