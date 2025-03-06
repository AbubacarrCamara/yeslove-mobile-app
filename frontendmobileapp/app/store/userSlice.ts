import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { name: " "}, //defines initial state
    reducers: {
        setName: (state, action) => {
            state.name = action.payload; // updates name state
        },
    },
})

export const { setName } = userSlice.actions; 
export default userSlice.reducer;