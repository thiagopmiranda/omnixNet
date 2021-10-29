import { Container } from './styles'

function Cep() {  

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
        <button>Ver Planos Disponíveis</button>
      </div>        
    </Container>
    
  )
}

export default Cep;