import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Locations } from './types'

export const locationsApi = createApi({
    reducerPath: 'locationsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    endpoints: (builder) => ({
        getLocations: builder.query<Locations, string>({
            query: () => `location`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetLocationsQuery } = locationsApi