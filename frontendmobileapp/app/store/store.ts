import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import profileReducer from "./profileSlice";
import aboutReducer from "./aboutSlice"

export const store = configureStore({
    reducer: { 
        user: userReducer,
        profile: profileReducer,
        about: aboutReducer,
    },
    devTools: process.env.NODE_ENV !== 'production'
})
export type State = ReturnType<typeof store.getState>

export default store