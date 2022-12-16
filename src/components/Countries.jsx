import React from "react";

// redux
import { useSelector} from "react-redux";

import styled from "styled-components";
import CountryCard from "./countryCard";
import loader from "../images/loader.gif"

const Countries = ({ allCountries }) => {
  const {isLoading } = useSelector((state) => state.countries);

  //returnig and loader if the content is not loaded yet
  if (isLoading) {
    return (
      <div className="loading">
        <img src={loader} alt="loader" />
        <h1>Loading...</h1>
      </div>
    );
  }
  return(
    <StyledSection>
        {/* {allCountries.map((country, index) => <CountryCard key={index} name={country.name.common}/>)} */}
    </StyledSection>
  )
};

const StyledSection = styled.section`
    
`
export default Countries;
