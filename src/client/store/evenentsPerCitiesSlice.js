import api from "./api";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const cityApi = createApi({
    reducerPath: 'city',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3000/api'
    }),
    endpoints: (builder) => ({
        getCity: builder.query({
        query: (city) => `/events/city/${city}`,
        providesTags: ["City"], 
        })
    })
});

export const rsvpApi = createApi({
  reducerPath:'rsvp',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/city'
  }),
  endpoints: (builder) => ({
    postRsvp: builder.query({
    query: (city, userId, eventId) => `/${city}/rsvp/${userId}/${eventId}`,
    })  
  })
})


export const { useGetCityQuery } = cityApi;
export const { usePostRsvpApi } = rsvpApi
