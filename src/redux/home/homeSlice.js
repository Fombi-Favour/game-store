import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  contents: [],
  continent: [],
  isloading: false,
};
const url = 'https://corona.lmao.ninja/v2/continents';

export const fetchContinents = createAsyncThunk('home/fetchContinents', async () => {
  const response = await fetch(url);
  const res = await response.json();
  return res.map((item) => ({
    name: item.continent,
    population: item.population,
    cases: item.cases,
    deaths: item.deaths,
    recovered: item.recovered,
    countries: item.countries,
  }));
});

export const fetchContinent = createAsyncThunk('home/fetchContinent', async (name) => {
  const base = `${url}/${name}`;
  const response = await fetch(base);
  if (!response.ok) {
    throw new Error('Failure fetching');
  }
  const data = await response.json();
  return { ...data, name };
});

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContinents.pending, (state) => ({
      ...state,
      isloading: true,
    }))
      .addCase(fetchContinents.fulfilled, (state, action) => ({
        ...state,
        isloading: false,
        contents: action.payload,
      }))
      .addCase(fetchContinents.rejected, (state) => ({
        ...state,
        isloading: false,
      }))
      .addCase(fetchContinent.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchContinent.fulfilled, (state, action) => ({
        ...state,
        continent: action.payload,
        isLoading: false,
      }))
      .addCase(fetchContinent.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default homeSlice.reducer;
