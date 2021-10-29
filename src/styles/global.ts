import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #121214;
    --pink: #FF008E;
    --orange: #FF7A29;
    --yellow: #FFCD1E;

    --text-title: #09090A;
    --text-body: #FFFFFF;

    --shape: #E1E1E6;

    --title-size: 1.875rem;
    --label-size: 1rem;
    --input-size: 0.875rem;    
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: linear-gradient(0deg, rgba(255,0,142,1) 0%, rgba(255,205,30,1) 100%); 
    -webkit-font-smoothing: antialiased;
    color: var(--text-body);
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;    
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    
  }

  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`