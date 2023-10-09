import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = {
  valueList: [],
  isloading: false,
};
const url = 'https://corona.lmao.ninja/v2/countries/';

export const fetchCountries = createAsyncThunk('details/fetchCountries', async (name) => {
  const base = `${url}${name}`;
  const response = await fetch(base);
  const res = await response.json();
  return res.map((item) => ({
    name: item.country,
    flag: item.countryInfo.flag,
    continent: item.continent,
    population: item.population,
    cases: item.cases,
    deaths: item.deaths,
    recovered: item.recovered,
  }));
});

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => ({
      ...state,
      isloading: true,
    }))
      .addCase(fetchCountries.fulfilled, (state, action) => ({
        ...state,
        isloading: false,
        valueList: action.payload,
      }))
      .addCase(fetchCountries.rejected, (state) => ({
        ...state,
        isloading: false,
      }));
  },
});

export default detailsSlice.reducer;
