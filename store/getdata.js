import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const STATUS = Object.freeze({
  IDLE: "Idle",
  ERROR: "Error",
  LOADING: "Loading",
});

export const getMoviesData = createAsyncThunk("moviesData/fetch", async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmFiYTgwNTQxNmYxNDI1NjFlOGFkZGE1NjA1NmI5OSIsIm5iZiI6MTc3NzExNDE0NC40NzksInN1YiI6IjY5ZWM5YzIwZjExY2VlYjczNzZiMTZiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jqE3OOgXMNLHaWip_gfu1ySxjN51dsJb_Dl2hp5UBtg",
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    options,
  );
  const data = response.json();
  return data.results;
});

const getMoviesDataSlice = createSlice({
  name: "moviesData",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesData.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(getMoviesData.fulfilled, (state, action) => {
        state.status = STATUS.IDLE;
        state.data = action.payload;
      })
      .addCase(getMoviesData.rejected, (state) => {
        state.status = STATUS.ERROR;
      });
  },
});
export default getMoviesDataSlice;
export const getMoviesActions = getMoviesDataSlice.actions;
