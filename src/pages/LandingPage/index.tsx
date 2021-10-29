import React from 'react';

import { Container } from './styles';

import placeImg from '../../assets/place.svg'
import wifiImg from '../../assets/wifi.svg'
import downloadImg from '../../assets/download.svg'
import uploadImg from '../../assets/upload.svg'
import playImg from '../../assets/play.svg'
import logoImg from '../../assets/logo.svg'


function LandingPage() {  

  return (
    <Container>
      <section className="offer-by-adrres">
        <div>
          <h2>Ofertas para:</h2>                  
          <p><img src={placeImg} alt="Localidade" /> Av. Major Sylvio Magalhães Padilha, São Paulo, SP.</p>
        </div>
        <button>Ops, errei meu CEP!</button>        
      </section>
      <div className="divider-1"></div>
      <section className="sign-it">
                
        <div>
          <h2>Assine <span>Omni<strong>NET</strong></span>
          , a melhor internet para você!</h2>        
        </div>
        <div>
          <p>Nossos Planos:</p>
        </div>
        <div className="cards-offer">
          <div className="card">
            <img src={wifiImg} alt="Pacote com Wi-Fi Incluso"/>
            <h2>60 Mega</h2>
            <p>de internet com<br/><strong>Wi-Fi Grátis</strong></p>          
            <h2>R$ 50,99<strong>/mês</strong></h2>
            <button>Assine Já</button>
          </div>
          <div className="card">
          <img src={wifiImg} alt="Pacote com Wi-Fi Incluso"/>
            <h2>100 Mega</h2>
            <p>de internet com<br/><strong>Wi-Fi Grátis</strong></p>          
            <h2>R$ 100,99<strong>/mês</strong></h2>
            <button>Assine Já</button>
          </div>
          <div className="card">
            <img src={wifiImg} alt="Pacote com Wi-Fi Incluso"/>
            <h2>200 Mega</h2>
            <p>de internet com<br/><strong>Wi-Fi Grátis</strong></p>          
            <h2>R$ 150,99<strong>/mês</strong></h2>
            <button>Assine Já</button>
          </div>
        </div>
      </section>
      <div className="divider-2"></div>

      <section className="services">
        <div className="card-service">
          <h2>Omnix<strong>NET</strong></h2>
          <p>Navegue com ultravelocidade de até 200 Mega
             e até 100 Mega de Upload
          </p>
        </div>
        <div className="card-content">
          <div className="card-service-2">
            <img src={downloadImg} alt="" />
            <div>
              <h3>Muito mais Desempenho</h3>
              <p>Baixe Arquivos e Jogue online</p>
            </div>          
          </div>
          <div className="card-service-2">
            <img src={uploadImg} alt="" />
            <div>
              <h3>Maior velocidade de Upload</h3>
              <p>Compartilhe seus vídeos e fotos com maior rapidez</p>
            </div>          
          </div>
          <div className="card-service-2">
            <img src={playImg} alt="" />
            <div>
              <h3>Mais Estabilidade</h3>
              <p>Veja seus vídeos, filmes e séries sem travar</p>
            </div>          
          </div>
        </div>
        <div className="card-service">
          <p>Oferta exclusiva site. Adesões até 29/10/2021 podendo ser prorrogado. A velocidade anunciada de acesso e tráfego na internet é nominal máxima, podendo sofrer variações decorrentes de fatores externos. Consulte a disponibilidade na sua localidade. Para mais informações OmnixNET.com.br ou SAC: 123 45. Pessoas portadoras de necessidades especiais de fala/audição, acesso pelo 678.</p>
        </div>
        
      </section>
      <footer>
        <div>
          <div>
            <img src={logoImg} alt="" />
            <p>©2021 OmnixNET.</p>
            <p>Todos os direitos reservados.</p>
          </div>                    
        </div>
      </footer>      
    </Container>    
  )
}

export default LandingPage;