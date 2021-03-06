import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  align-items: center;
  justify-content: center;
  background: var(--background);
  max-width: 1120px;
  margin: 0 auto;
  
  div.container {
    margin-top: 5rem;    
  }
  
  h2 {
    font-size: 1.875rem;
    margin-bottom: 1rem;
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
    margin-bottom: 30.9rem;

    box-shadow: 0.125rem #d1d1d1 ;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }


`

