import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
    name: "about",
    initialState: { 
        name: "", 
        email: "", 
        phone: "", 
        address: "", 
        website: "",
        bio: ""
     
    }, 
    reducers: {
        setName: (state, action) => {
            state.name = action.payload; 
        },
        setEmail: (state, action) => {
            state.email = action.payload; 
        },
        setPhone: (state, action) => {
            state.phone = action.payload; 
        },
        setAddress: (state, action) => {
            state.address = action.payload; 
        },
        setWebsite: (state, action) => {
            state.website = action.payload; 
        },
        setBio: (state, action) => {
            state.bio = action.payload
        }

    },
})

export const { setName, setEmail, setPhone, setAddress, setWebsite, setBio } = aboutSlice.actions; 
export default aboutSlice.reducer;