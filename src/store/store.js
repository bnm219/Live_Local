import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventsSlice"

const store = configureStore({
    reducer: {
        students: studentReducer
    }
})

export default store;