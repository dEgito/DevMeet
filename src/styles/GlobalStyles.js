import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --white: #ffffff;
        --gray-100: #C6C6C6;
        --gray-300: #BFBFBF;
        --gray-400: #959595;
        --gray-900: #282828;

        --green-500: rgba(4, 211, 97, 0.2);

        --orange-300: #FF7B3E;
        --orange-500: #FF5100;
    }
    :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px var(--orange-500);
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 87.5%;
    }
    body {
        background-color: var(--gray-900);
        color: var(--gray-100);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Epilogue', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    
`;

export default GlobalStyle;