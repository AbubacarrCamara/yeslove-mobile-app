import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Tab {
    HOME = "HOME",
    GET_HELP = "GET_HELP",
    EVENTS = "EVENTS",
    PROFILE = "PROFILE"
}

const navigationSlice = createSlice({
    name: "navigation",
    initialState: {currentTab: Tab.HOME}, //defines initial state
    reducers: {
        changeTabAction: (state, action: PayloadAction<Tab>) => {
            state.currentTab = action.payload
        }
    },
})

export const { changeTabAction } = navigationSlice.actions; 
export const navigationReducer = navigationSlice.reducer;
