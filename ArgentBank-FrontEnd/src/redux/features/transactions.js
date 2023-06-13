import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCollapsed: false,
  isEditingNote: false,
  isEditingCategory: false,
  noteValue: "Default Text",
  categoryValue: "Default Category",
};

const transactions = createSlice({
  name: "transactionsItems",
  initialState,
  reducers: {
    setIsCollapsed: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
    setIsEditingNote: (state) => {
      state.isEditingNote = !state.isEditingNote;
    },
    setIsEditingCategory: (state) => {
      state.isEditingCategory = !state.isEditingCategory;
    },
    setNoteValue: (state, action) => {
      state.noteValue = action.payload;
    },
    setCategoryValue: (state, action) => {
      state.categoryValue = action.payload;
    },
  },
});

export const {
  setIsCollapsed,
  setNoteValue,
  setCategoryValue,
  setIsEditingNote,
  setIsEditingCategory,
} = transactions.actions;

export default transactions.reducer;
