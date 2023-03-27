import React from "react";
import IMG3 from './img/logo uniac.jpg';
import IMG4 from './img/facebook.png';
import IMG5 from './img/google.png';
import IMG6 from './img/youtube.png';
import IMG7 from './img/instagram.png';
import IMG8 from './img/twitter.png';
import CSS from "./Footer.css";

function Footer() {
    return (
      <body>
          <footer className="footer">
              <div class="logotipo">
                  <img 
                  className="d-block w-100"
                  src={IMG3}/>
                  
              </div>
              <nav class="redes">
                  <ul>
                      <li><a href="https://www.facebook.com/embuscadocodigo" target="_blank"><img src={IMG4} alt="Nosso Facebook"></img></a></li>
                      <li><a href="https://plus.google.com/115289918651298518386" target="_blank"><img src={IMG5} alt="Nosso Google plus"></img></a></li>
                      <li><a href="https://www.youtube.com/channel/UC6EgJeCFC-P96Y0Gvla0Z3w" target="_blank"><img src={IMG6} alt="Canal no YouTube"></img></a></li>
                      <li><a href="https://www.instagram.com/embuscadocodigo/" target="_blank"><img src={IMG7} alt="Perfil no Instagram"></img></a></li>
                      <li><a href="https://www.twitter.com/embuscadocodigo/" target="_blank"><img src={IMG8} alt="Perfil no Twitter"></img></a></li>
                 </ul>
              </nav>
          </footer>
      </body>
    );
  }
  
  export default Footer;