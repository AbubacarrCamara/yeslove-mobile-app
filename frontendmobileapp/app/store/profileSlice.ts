import { ProfileResponse } from "@/generated-api";
import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {info:  {} as ProfileResponse}, //defines initial state
    reducers: {
        setProfileInformation: (state, action) => {
            state.info = action.payload; // updates name state
        }
    },
})

export const { setProfileInformation } = profileSlice.actions; 
export default profileSlice.reducer;