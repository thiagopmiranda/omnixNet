import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container } from './styles';
import Input from '../../components/Input';

interface Cep {
  cep: string;  
}

const Cep: React.FC = () => {
  const [cep, setCep] = useState<Cep>({} as Cep);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setCep({
        ...cep,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [cep]
  ); 

  
  const history = useHistory(); 
  
  function handleClick() {    
    history.push("/landingpage");    
  }
  
  return (    
    <Container>
      <div className="container">
        <h2>Olá,<br/><strong>Bem-vindo(a)!</strong></h2>
        <p>Por favor, insira seu CEP abaixo para continuarmos.</p>
      </div>      
      <div>        
          <Input
            name="cep"
            mask="cep"
            onChange={handleChange}
            placeholder="99999-999"
          />                  
        <button className="button" onClick={handleClick} >Ver Planos Disponíveis</button>
      </div>        
    </Container>    
  )  
}

export default Cep;