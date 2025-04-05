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
        logInAction: (state, action: PayloadAction<LoginRequest>) => {},
        attemptRefreshFromLocalStorageAction: (state, action: PayloadAction<void>) => {}
    },
})

export const { setLoggedInAction, logInAction, attemptRefreshFromLocalStorageAction} = authSlice.actions; 
export default authSlice.reducer;