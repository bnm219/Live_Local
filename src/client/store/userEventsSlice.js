import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
    reducerPath: 'profile',
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
        getProfile: builder.query({
        query: () => "/profile",
        })
    }),
});

export const cancelRsvpApi = createApi({
  reducerPath:'cancelRsvp',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/profile',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    cancelRsvp: builder.mutation({
      query: (eventId) => ({
        url: `/${eventId}`,
        method: "PUT",
      })
    })
  })
});


export const { useGetProfileQuery } = profileApi;
export const { useCancelRsvpMutation } = cancelRsvpApi;