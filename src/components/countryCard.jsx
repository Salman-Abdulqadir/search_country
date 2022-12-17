import React from "react";
import styled from "styled-components";

const Country = ({imageUrl, name, population, region, capital})=>{
    return(
        <StyledCard>
            <div className="image-wrapper">
                <img src={imageUrl} alt={`${name}'s Flag`} />
            </div>
            <div className="country-info">
                <h2>{name}</h2>
                <p>Population: <span>{population.toLocaleString()}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital}</span></p>
            </div>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    background-color: white;
    box-shadow: 10px 10px 20px rgba(232, 229, 229, 0.5);
    .image-wrapper{
        height: 15rem;
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .country-info{
        padding: 1rem;
        h2{
            margin-bottom: 1rem;
        }
        p span{
            color: grey;
        }
        
    }
`

export default Country;