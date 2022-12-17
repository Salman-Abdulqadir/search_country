import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    input, button{
        font-family: inherit;
    }
    img, svg{
        display: block;
        max-width: 100%;
    }
    body{
        background-color: hsl(0, 0%, 97%);
        font-family: 'Nunito Sans', sans-serif;
    }
    .flex{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem;
    }
    .loading{
        text-align: center;
        img{
            mix-blend-mode: multiply;
            margin: auto;
        }
    }
`;
