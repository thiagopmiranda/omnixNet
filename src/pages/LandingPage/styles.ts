import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  max-width: 1120px;
  margin: 0 auto;
  background: var(--background);

  section {
    display: grid;
    justify-items: center;    
  }

  section.offer-by-adrres {
    margin-top: 4rem;

    h2 {
      font-size: var(--title-size);
      font-weight: 400;      
      margin-bottom: 1rem;
    }
    
    button {
      background: var(--orange);
      color: var(--text-body);
      font-size: var(--label-size);
      font-weight: 700;
      height: 3.125rem;
      width: 11.25rem;
      border: none;
      border-radius: 0.625rem;
      margin-top: 3rem;
      margin-bottom: 5rem;
      
      box-shadow: 0.125rem #d1d1d1 ;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  section.sign-it {
    margin-top: 5rem;
    margin-bottom: 5rem;    
  }

  div.cards-offer {
    @media (min-width: 1200px) {
      display: flex;
      justify-content: space-between;
      padding: 0 1.5rem;
      width: 100%;  
    }   
  }

  div.card {
    display: grid;
    justify-items: center;
    grid-column-gap: 1rem;   
    grid-row-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmanx(250px, 1fr));
    background: var(--text-body);
    color: var(--text-title);
    max-width: 20.4375rem;    
    margin-top: 2rem;
    border: none;
    border-radius: 0.625rem;
    padding: 1.5rem 2rem 2rem 2rem; 

    h2 {   
      font-size: var(--title-size);       
      color: var(--pink);
    }

    h2 span {
      font-size: 1rem;      
    }

    p {
      margin-bottom: 2rem;
    }

    p strong {
      font-size: 1.125rem;
      padding-left: 0.5rem;
    }

    button {
      background: var(--pink);
      color: var(--text-body);
      font-size: var(--label-size);
      font-weight: 700;
      height: 3.125rem;
      width: 16.4375rem;
      border: none;
      border-radius: 0.625rem; 
      
      box-shadow: 0.125rem #d1d1d1 ;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }      
  }

  div.divider-1 {
      height: 1px;
      background: linear-gradient(270deg, rgba(255,0,142,1) 0%, rgba(255,205,30,1) 100%);     
  }
  

  div.divider-2 {
    height: 1px;  
    background: linear-gradient(90deg, rgba(255,0,142,1) 0%, rgba(255,205,30,1) 100%); 
    
  }

  div.card-content {
    @media (min-width: 1200px) {
      display: flex;      
      justify-content: space-between;
      width: 100%;
    }   
  }

  section.services {
    display: grid;
    justify-items: flex-start;    
    grid-column-gap: 1rem;   
    grid-row-gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmanx(250px, 1fr));
    margin: 5rem 1.5rem 5rem 1.5rem;
  }

  div.card-service {  
    h2 {
      font-size: var(--title-size);
      font-weight: 400;
      margin-bottom: 1rem;
    }

    h2 strong {
      color: var(--pink);
    }
  }

  div.card-service-2 {
    display: flex;
    align-items: center; 
    margin-bottom: 3rem;
    width: 22rem;     

    h3 {      
      color: var(--pink);
      padding-left: 1rem;
    }

    p {
      align-self: flex-end;
      padding-left: 1rem;
    }
  }

  footer {
    background: #8D8D99;
    padding: 4rem 1.125rem 4rem;

    p {
      margin-top: 1rem;
    }
  }


`