import { createSlice } from "@reduxjs/toolkit";

// Vérifiez si un token existe dans le localStorage
const tokenFromLocalStorage = localStorage.getItem('token');

const initialState = {
    token: tokenFromLocalStorage || null,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
        loginSuccess: (state, action) => {
            // Stocker le token dans l'état Redux et dans le localStorage
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        },
        logout: (state) => {
            state.token = null;
            // Supprimer le token du localStorage lors de la déconnexion
            localStorage.removeItem('token');
          },
    },
});
export const {loginSuccess, logout} = loginSlice.actions;

export default loginSlice.reducer;
