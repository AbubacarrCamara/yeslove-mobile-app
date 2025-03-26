import { UserProfile } from "@/generated-api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {info:  {} as UserProfile, view: {activeTab: "Timeline", activeAboutTab: "View"}}, //defines initial state
    reducers: {
        setProfileInformation: (state, action: PayloadAction<UserProfile>) => {
            state.info = action.payload; 
        },
        setName: (state, action: PayloadAction<string>) => {
            if(state.info.contact_info == undefined) return;
            state.info.contact_info.name = action.payload; 
        },
        setEmail: (state, action: PayloadAction<string>) => {
            if(state.info.contact_info == undefined) return;
            state.info.contact_info.email = action.payload; 
        },
        setPhone: (state, action: PayloadAction<string>) => {
            if(state.info.contact_info == undefined) return;
            state.info.contact_info.phone = action.payload; 
        },
        setAddress: (state, action: PayloadAction<string>) => {
            if(state.info.contact_info == undefined) return;
            state.info.contact_info.address = action.payload; 
        },
        setWebsite: (state, action: PayloadAction<string>) => {
            if(state.info.contact_info == undefined) return;
            state.info.contact_info.website = action.payload; 
        },
        setBio: (state, action: PayloadAction<string>) => {
            state.info.bio = action.payload
        },
        setActiveTab: (state, action: PayloadAction<string>) => {
            state.view.activeTab = action.payload
        },
        setActiveAboutTab: (state, action: PayloadAction<string>) => {
            state.view.activeAboutTab = action.payload
        }
    },
})

export const { setProfileInformation, setName, setAddress, setEmail, setPhone, setBio, setWebsite, setActiveAboutTab, setActiveTab} = profileSlice.actions; 
export default profileSlice.reducer;