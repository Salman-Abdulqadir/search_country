import React from "react";
import styled from "styled-components";

import {BsMoonStars} from "react-icons/bs"

const Nav = () => {
    return(
        <StyledNav className="flex">
            <h1>Where is the world</h1>
            <h3 className="flex"><BsMoonStars/> Dark Mode</h3>
        </StyledNav>
    )
}

const StyledNav = styled.header`
    width: 90%;
    padding: 2rem 0rem;
    margin: auto;
    border-bottom: 2px solid #dcdcdc;
`
export default Nav;