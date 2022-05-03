import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  color: "",
  bgColor: "",
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: initialStateValue,
  reducers: {
    changeTextColor: (state, action) => {
      console.log(action);
      state.color = action.payload;
    },
    changeBgColor: (state, action) => {
      console.log(action);
      state.bgColor = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTextColor, changeBgColor } = ThemeSlice.actions;

export default ThemeSlice.reducer;
