import { configureStore } from "@reduxjs/toolkit";
import repoSlice from "./repoSlice";
import themeSlice from "./themeSlice";

export const store = configureStore({
  reducer: {
    themeData: themeSlice,
    repoData: repoSlice,
  },
});

export default store;
