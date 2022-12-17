import { configureStore } from "@reduxjs/toolkit";

//importing reducers
import CountriesReducer from "./countriesReducer";
import CountryDetailReducer from "./countryDetailReducer";

const store = configureStore({
  reducer: {
    countries: CountriesReducer,
    countryDetails: CountryDetailReducer
  },
});

export default store;

