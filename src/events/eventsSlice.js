import api from "../../store/api";

const eventsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getEvents: builder.query({
        query: () => `/${city}`,
        providesTags: [`${city}`],
        })
    })
});

export const getEvents = eventsApi;