import api from "./api";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const citiesApi = createApi({
    reducerPath: 'cities',
    baseQuery: fetchBaseQuery({
      baseUrl: '/api',
      prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
      },
    }),
    endpoints: (builder) => ({
        getCities: builder.query({
        query: () => "/cities",
        providesTags: ["Cities"],
        })
    })
})


export const { useGetCitiesQuery } = citiesApi;
