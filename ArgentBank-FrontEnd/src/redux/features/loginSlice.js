import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
        loginSuccess: (state, action) => {
            state.token = action.payload.token;
        },
    },
});
export const {loginSuccess} = loginSlice.actions;

export default loginSlice.reducer;