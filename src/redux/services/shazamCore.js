import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'f55adf257cmshcaa98d23b70a2dfp18dc53jsn8e80520a2cbc')

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => '/charts/world'
        }),
        getSongDetails: builder.query({
            query: (id) => `/tracks/details?track_id=${id}`
        }),
        getSongRelated: builder.query({
            query: (id) => `/tracks/related?track_id=${id}` 
        })
    })
})

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery
} = shazamCoreApi;