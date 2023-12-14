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
    addRsvp: builder.mutation({
      query: (userId, eventId) => ({
        url: `/rsvp/${userId}/${eventId}`,
        method: "POST",
      })
    })
  })
});


export const { useGetCityQuery } = cityApi;
export const { useAddRsvpMutation } = rsvpApi;

