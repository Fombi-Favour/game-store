import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  games: [],
  isLoading: false,
};

const url = 'https://www.cheapshark.com/api/1.0';

export const fetchGames = createAsyncThunk('home/fetchGames', async (name) => {
  const base = `${url}/games?title=${name}`;
  const response = await fetch(base);
  const res = await response.json();
  return res.map((item) => ({
    id: item.gameID,
    title: item.external,
    image: item.thumb,
    deal: item.cheapest,
  }));
});

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
      .addCase(fetchGames.fulfilled, (state, action) => ({
        ...state,
        games: action.payload,
        isLoading: false,
      }))
      .addCase(fetchGames.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default detailsSlice.reducer;
