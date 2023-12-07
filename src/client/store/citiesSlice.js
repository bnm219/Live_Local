import api from "./api";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const citiesApi = createApi({
    reducerPath: 'cities',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3000/api'
    }),
    endpoints: (builder) => ({
        getCities: builder.query({
        query: () => "/cities",
        providesTags: ["Cities"],
        })
    })
})


export const { useGetCitiesQuery } = citiesApi;
