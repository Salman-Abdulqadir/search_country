import { useEffect } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "./redux/countriesReducer";

//components
import Nav from "./components/nav";
import Countries from "./components/Countries";

function App() {
  const {allCountries} = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  //loading the data when the page refreshes
  useEffect(()=>{
    dispatch(fetchCountries())
  },[dispatch])

  return (
    <div className="App">
      <Nav/>
      <Countries allCountries={allCountries}/>
    </div>
  );
}

export default App;
