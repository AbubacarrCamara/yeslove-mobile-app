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


    },
})

export const { setName, setEmail, setPhone, setAddress, setWebsite, setBio } = aboutSlice.actions; 
export default aboutSlice.reducer;