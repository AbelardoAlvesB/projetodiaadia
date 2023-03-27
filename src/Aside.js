import React from "react";

function Aside() {
    return (
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
          The current link item
        </a>
        <a href="#" class="list-group-item list-group-item-action">Engenharia de Software</a>
        <a href="#" class="list-group-item list-group-item-action">Sistema de Informação</a>
        <a href="#" class="list-group-item list-group-item-action">Administração</a>
        <a class="list-group-item list-group-item-action disabled">Marketing</a>
      </div>
    );
  }
  
  export default Aside;