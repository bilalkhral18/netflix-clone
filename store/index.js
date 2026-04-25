import { configureStore } from "@reduxjs/toolkit";
import getMoviesDataSlice from "./getdata";

const netflixStore = configureStore({
  reducer: {
    moviesData: getMoviesDataSlice.reducer,
  },
});

export default netflixStore;

