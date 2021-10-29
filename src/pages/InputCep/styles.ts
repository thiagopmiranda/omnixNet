import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  align-items: center;
  justify-content: center;
  background: var(--background);
  max-width: 1120px;
  margin: 0 auto;
  
  div {
    margin-top: 5rem;    
  }

  div.input {
    display: grid;
    align-items: center;       
  }

  h2 {
    font-size: 1.875rem;
    margin-bottom: 1rem;
  }

  label {
    display: grid;
    align-items: center;    
    margin-bottom: 2rem;     
  }

  input {
    background: #C4C4CC;
    color: #202024;
    
    height: 2.75rem;
    border-radius: 1.375rem;
    padding: 1rem;
    margin-top: 0.5rem;
    
  }

  button {
    background: var(--pink);
    color: var(--text-body);
    font-weight: 600;
    border: none;
    border-radius: 0.625rem;
    height: 2.75rem;
    width: 12.375rem;
    margin-left: 5.4rem;
    margin-bottom: 30.6rem;

    box-shadow: 0.125rem #d1d1d1 ;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }


`

