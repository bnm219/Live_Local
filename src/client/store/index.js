import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { citiesApi } from './citiesSlice'
import api from "./api";
import { cityApi } from "./evenentsPerCitiesSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    cities: citiesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(citiesApi.middleware).concat(cityApi.middleware),
});

export default store;
