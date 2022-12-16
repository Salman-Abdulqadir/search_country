import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAPI from "../api";

//getting the data from the api
export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get(getAPI());
    console.log(response);
    return response;
  }
);

const initialState = {
  allCountries: [],
  isLoading: false,
  filteredCountries: [],
};

const CountriesReducer = createSlice({
  name: "countries",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
        state.isLoading = true;
    })
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allCountries.push(action.payload)
    })
    builder.addCase(fetchCountries.rejected, (state) => {
        state.isLoading = false;
        console.log("Fetching error!")
    })
  }
});

export default CountriesReducer;
