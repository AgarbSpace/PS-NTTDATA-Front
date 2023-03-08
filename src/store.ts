import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface MovieState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  data: null,
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getMovieStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getMovieSuccess: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    getMovieFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    resetMovie: (state) => {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});

export const { getMovieStart, getMovieSuccess, getMovieFailure, resetMovie } = movieSlice.actions;

export const fetchMovie = (movieTitle: string, year?: string, plot?: string) => async (dispatch: any) => {
  try {
    dispatch(getMovieStart());

    if (plot !== 'Short' && year !== '') {
      const response = await axios.get(`http://localhost:5000/movie?title=${movieTitle}&plot${plot}&year=${year}`);
      dispatch(getMovieSuccess(response.data));
      return;
    }

    if (plot !== 'Short') {
      const response = await axios.get(`http://localhost:5000/movie?title=${movieTitle}&plot${plot}`);
      dispatch(getMovieSuccess(response.data));
      return;
    }

    if (year !== '') {
      const response = await axios.get(`http://localhost:5000/movie?title${movieTitle}&year${year}`);
      dispatch(getMovieSuccess(response.data));
      return;
    }
    const response = await axios.get(`http://localhost:5000/movie?title=${movieTitle}`);
    dispatch(getMovieSuccess(response.data));
  } catch (error: any) {
    dispatch(getMovieFailure(error.message));
  }
};

export const fetchMovieById = (id: string, plot?: string) => async (dispatch: any) => {
  try {
    dispatch(getMovieStart());
    const response = await axios.get(`http://localhost:5000/movie?id=${id}`);
    dispatch(getMovieSuccess(response.data));
  } catch (error: any) {
    dispatch(getMovieFailure(error.message));
  }
};


export default configureStore({
  reducer: {
    movie: movieSlice.reducer,
  },
});
