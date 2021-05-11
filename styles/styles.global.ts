import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        &::-webkit-scrollbar {
            width: 4px;
        }

        &::-webkit-scrollbar-track {
            background-color: #fefefefe;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #1b1f23;
        }
    }
    body {
        height: 100vh;
        width: 100%;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
        color: #40464D;
    }
    button {
        font-family: 'Poppins', sans-serif;
    }
    a {
        text-decoration: none;
        color: #40464D;
    }
`
