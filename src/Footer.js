import React from "react";
import IMG3 from './img/logo uniac.jpg';
import IMG4 from './img/menssage.jpg';
import IMG5 from './img/facebook.png';
import IMG6 from './img/youtube.png';
import IMG7 from './img/Instagram.jpg';
import IMG8 from './img/twiiter.jpg';
import IMG9 from './img/linkedin.jpg';

import "./Footer.css";

function Footer() {
    return (
      <body>
          <footer className="footer">
              <div class="logotipo">
                  <img 
                  className="d-block w-100"
                  src={IMG3}/>
                   <div class="icons">
                <a href="" target="_blank" class="social-link-small footer w-inline-block">
                    <img src={IMG4} class="social-icon-small"/> 
                </a>
                <a href="" target="_blank" class="social-link-small footer w-inline-block">
                    <img src={IMG5} class="social-icon-small"/> 
                </a>
                <a href="" target="_blank" class="social-link-small footer w-inline-block">
                    <img src={IMG6} class="social-icon-small"/> 
                </a>
                <a href="" target="_blank" class="social-link-small footer w-inline-block">
                    <img src={IMG7}  class="social-icon-small"/> 
                </a>
                <a href="" target="_blank" class="social-link-small footer w-inline-block">
                    <img src={IMG8}  class="social-icon-small"/> 
                </a>
                <a href="" target="_blank" class="social-link-small footer w-inline-block">
                    <img src={IMG9}  class="social-icon-small"/>
                </a>
              </div>
              </div>
              <div class="footer-v1-column">
                <h4>Institucional</h4>
                <a href="/#informacoes" class="footer-v1-link">A Instituição</a>
                <a href="/#ingresso" class="footer-v1-link">Campi</a>
                <a href="/#informacoes" class="footer-v1-link">A Instituição</a>
                <a href="https://www.uniacademia.edu.br/institucional/bolsas-e-parcelamentos" class="footer-v1-link">Bolsas e Descontos</a>
                <a href="https://www.uniacademia.edu.br/institucional/calendario-academico" class="footer-v1-link">Calendário</a>
              </div>
              <div class="footer-v1-column">
                <h4>Acesso rápido</h4>
                    <a href="/cursos" class="footer-v1-link">Cursos</a>
                    <a href="/blog" class="footer-v1-link">Blog</a>
                    <a href="/noticias" class="footer-v1-link">Notícias</a>
                    <a href="/eventos" class="footer-v1-link">Eventos</a>
                    <a href="/contato" class="footer-v1-link">Contato</a>
              </div>
              <div class="footer-v1-column">
                <h4>Serviços</h4>
                    <a href="/home" class="footer-v1-link">Blibioteca</a>
                    <a href="/home" class="footer-v1-link">Estágio</a>
                    <a href="/home" class="footer-v1-link">Secretaria</a>
                    <a href="/home" class="footer-v1-link">Extensão e Pesquisa</a>
                    <a href="/home" class="footer-v1-link">Certificado</a>
              </div>
          </footer>
      </body>
    );
  }
  
  export default Footer;