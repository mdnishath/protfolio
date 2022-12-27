const { createSlice } = require("@reduxjs/toolkit");

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light",
  },
  reducers: {
    themeData(state, action) {
      state.darkMode = action.payload;
    },
  },
});

export const { themeData } = themeSlice.actions;
export default themeSlice.reducer;
