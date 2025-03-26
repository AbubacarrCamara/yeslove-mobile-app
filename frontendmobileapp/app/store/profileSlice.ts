import { ProfileResponse } from "@/generated-api";
import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {info:  {} as ProfileResponse }, //defines initial state
    reducers: {
        setProfileInformation: (state, action) => {
            state.info = action.payload; 
        },
        setName: (state, action) => {
            if(state.info.contact_info == undefined) return;
            state.info.contact_info.name = action.payload; 
        },
        setEmail: (state, action) => {
            if(state.info.contact_info == undefined) return;
            state.info.contact_info.email = action.payload; 
        },
        setPhone: (state, action) => {
            if(state.info.contact_info == undefined) return;
            state.info.contact_info.phone = action.payload; 
        },
        setAddress: (state, action) => {
            if(state.info.contact_info == undefined) return;
            state.info.contact_info.address = action.payload; 
        },
        setWebsite: (state, action) => {
            if(state.info.contact_info == undefined) return;
            state.info.contact_info.website = action.payload; 
        },
        setBio: (state, action) => {
            state.info.bio = action.payload
        }
    },
})

export const { setProfileInformation, setName, setAddress, setEmail, setPhone, setBio, setWebsite } = profileSlice.actions; 
export default profileSlice.reducer;