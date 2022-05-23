import { createGlobalStyle } from 'styled-components';

export const StylesGlobal = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    
    --red: #E52E4D;
    --green: #33CC95;
    
    --blue: #5429CC;
    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body:#969CB3;

    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  button, input {
    outline: none;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
  
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);

  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    background: var(--background);
  }

  .react-modal-close {
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
    background: transparent;
    border: 0;
    outline: 0;
    transition: filter .2s ease-in-out;

    &:hover {
      filter: brightness(0.7)
    }
  }
`;