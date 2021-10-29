import { useHistory } from "react-router-dom";
import { Container } from './styles'

function Cep() {  
  const history = useHistory();

  function handleClick() {
    history.push("/landingpage");
  }  

  return (
    
    <Container>
      <div>
        <h2>Olá,<br/><strong>Bem-vindo(a)!</strong></h2>
        <p>Por favor, insira seu CEP abaixo para continuarmos.</p>
      </div>      
      <div className="input">
        <label>CEP:
          <input name="CEP" id="CEP" required pattern="\d{5}-\d{3}"/>
        </label>
        <button type="button" onClick={handleClick}>Ver Planos Disponíveis</button>
      </div>        
    </Container>
    
  )
}

export default Cep;