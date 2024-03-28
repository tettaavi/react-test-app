import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Characters } from './types'

// Define a service using a base URL and expected endpoints
export const characterApi = createApi({
    reducerPath: 'characterApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    endpoints: (builder) => ({
        getCharacter: builder.query<Characters, string>({
            query: (page: string) => `character/?page=${page}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCharacterQuery } = characterApi