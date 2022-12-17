import React from "react";
import styled from "styled-components";

import { BsMoonStars } from "react-icons/bs";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <StyledNav className="flex">
      <Link className="home" to={"/"}>
        <h1>Where is the world</h1>
      </Link>
      <h3 className="flex">
        <BsMoonStars /> Dark Mode
      </h3>
    </StyledNav>
  );
};

const StyledNav = styled.header`
align-items: center;
  width: 90%;
  padding: 2rem 0rem;
  margin: auto;
  border-bottom: 2px solid #dcdcdc;
  .home{
    text-decoration: none;
    color: black;
  }
  @media screen and (max-width:500px){
    h1{
        font-size: 1.3rem;
    }
    h3{
        font-size: medium;
    }
  }
`;
export default Nav;
