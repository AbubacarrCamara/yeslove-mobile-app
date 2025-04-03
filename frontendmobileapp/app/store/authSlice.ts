import { LoginRequest } from "@/generated-api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Router } from "expo-router";

const authSlice = createSlice({
    name: "auth",
    initialState: { loggedIn: false}, //defines initial state
    reducers: {
        setLoggedInAction: (state, action: PayloadAction<boolean>) => {
            state.loggedIn = action.payload; 
        },
        logInAction: (state, action: PayloadAction<{request: LoginRequest, router: Router}>) => {}
    },
})

export const { setLoggedInAction, logInAction } = authSlice.actions; 
export default authSlice.reducer;