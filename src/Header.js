import React from "react";

function Header() {
    return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Uniacademia</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Institucional</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Campi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Cursos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Serviços</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Acesso</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Informação</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Contato</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Inscreva-se</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Header;