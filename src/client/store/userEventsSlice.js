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

export const deleteRsvpApi = createApi({
  reducerPath:'rsvp',
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
    deleteRsvp: builder.mutation({
      query: (eventId) => ({
        url: `/${eventId}`,
        method: "DELETE",
      })
    })
  })
});


export const { useGetProfileQuery } = profileApi;
export const { useDeleteRsvpMutation } = deleteRsvpApi;