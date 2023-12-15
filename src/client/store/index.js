import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { citiesApi } from './citiesSlice'
import api from "./api";
import { cityApi, rsvpApi } from "./eventsPerCitiesSlice";
import { cancelRsvpApi, profileApi } from "./userEventsSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    cities: citiesApi.reducer,
    city : cityApi.reducer,
    rsvp: rsvpApi.reducer,
    cancelRsvp: cancelRsvpApi.reducer,
    profile: profileApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(citiesApi.middleware).concat(cityApi.middleware).concat(rsvpApi.middleware).concat(profileApi.middleware).concat(cancelRsvpApi.middleware),
});

export default store;
