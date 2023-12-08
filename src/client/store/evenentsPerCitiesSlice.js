import api from "./api";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const cityApi = createApi({
    reducerPath: 'city',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3000/api'
    }),
    endpoints: (builder) => ({
        getCities: builder.query({
        query: () => "/:city",
        providesTags: ["City"], 
        })
    })
})


export const { useGetCityQuery } = cityApi;
