import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const cityApi = createApi({
    reducerPath: 'city',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3000/api',
      prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
      },
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
    baseUrl: 'http://localhost:3000/api/events',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    addRsvp: builder.mutation({
      query: (eventId) => ({
        url: `/rsvp/${eventId}`,
        method: "POST",
      })
    })
  })
});


export const { useGetCityQuery } = cityApi;
export const { useAddRsvpMutation } = rsvpApi;

