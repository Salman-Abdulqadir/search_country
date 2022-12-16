import { configureStore } from "@reduxjs/toolkit";

//importing reducers
import CountriesReducer from "./countriesReducer";

const store = configureStore({
  reducer: {
    countries: CountriesReducer
  },
});

export default store;

