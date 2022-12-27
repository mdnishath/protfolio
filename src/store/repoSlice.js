const { createSlice } = require("@reduxjs/toolkit");

const repoSlice = createSlice({
  name: "theme",
  initialState: {
    repo: {},
  },
  reducers: {
    repoData(state, action) {
      state.darkMode = action.payload;
    },
  },
});

export const { repoData } = repoSlice.actions;
export default repoSlice.reducer;
