import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: null,
  isOpen: false,
  userName: null,
  userNameEdit: null,
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
    },
    resetUserProfile: (state) => {
      state.id = null;
      state.email = null;
    },
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    resetUserNameEdit: (state) => {
      state.userNameEdit = state.userName;
    },
    setUserNameEdit: (state, action) => {
      state.userNameEdit = action.payload;
    },
  },
});

export const {
  setUserProfile,
  resetUserProfile,
  toggleOpen,
  setUserNameEdit,
  resetUserNameEdit,
} = userInfoSlice.actions;

export default userInfoSlice.reducer;
