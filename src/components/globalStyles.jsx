import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    input, button, select{
        font-family: inherit;
    }
    img{
        display: block;
        max-width: 100%;
    }
    body{
        background-color: hsl(0, 0%, 97%);
        font-family: 'Nunito Sans', sans-serif;
    }
    button, input, select{
        padding: 0.5rem 1rem;
        background-color: white;
        border: 1px solid hsl(0, 0%, 90%);
        cursor: pointer;
        transition: background 0.3s ease;
    }
    button:hover{
        background-color: hsl(0, 0%, 90%);
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
