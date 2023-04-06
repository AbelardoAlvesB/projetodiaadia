import React from "react";
import "./Header.css"
import IMG1 from "./img/logo uniac.jpg";

function Header() {
    return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img alt="" src={IMG1}/>
          <h1 class="navbar-brand">Uniacademia</h1>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Institucional</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Campi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Cursos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Serviços</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Acesso</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Informação</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Contato</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Inscreva-se</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Header;