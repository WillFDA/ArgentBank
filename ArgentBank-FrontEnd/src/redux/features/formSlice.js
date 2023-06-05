// redux/features/formSlice.js
import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'form',
  initialState: {
    username: '',
    password: '',
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    resetForm: (state) => {
      state.username = '';
      state.password = '';
    },
  },
})

export const { setUsername, setPassword, resetForm } = formSlice.actions;

export default formSlice.reducer;
