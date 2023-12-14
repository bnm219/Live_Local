import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { citiesApi } from './citiesSlice'
import api from "./api";
import { cityApi, rsvpApi } from "./eventsPerCitiesSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    cities: citiesApi.reducer,
    city : cityApi.reducer,
    rsvp: rsvpApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(citiesApi.middleware).concat(cityApi.middleware).concat(rsvpApi.middleware),
});

export default store;
