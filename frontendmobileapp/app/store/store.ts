import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import profileReducer from "./profileSlice";

export const store = configureStore({
    reducer: { 
        user: userReducer,
        profile: profileReducer,
    },
    devTools: process.env.NODE_ENV !== 'production'
})
export type State = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store