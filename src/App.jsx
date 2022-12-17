import { useEffect } from "react";

//redux
import { useDispatch } from "react-redux";
import { fetchCountries } from "./redux/countriesReducer";

//components
import Nav from "./components/nav";
import Filters from "./components/filters";

//pages
import Home from "./pages/home";
import CountryDetails from "./pages/countryDetails"

//router
import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  //loading the data when the page refreshes
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters />
              <Home />
            </>
          }
        />
        <Route path="/country/:id" element={<CountryDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
