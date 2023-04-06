import React from "react";
import "./Aside.css"

function Aside() {
    return (
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">Engenharia de Software</a>
        <a href="#" class="list-group-item list-group-item-action">Sistema de Informação</a>
        <a href="#" class="list-group-item list-group-item-action">Administração</a>
        <a class="list-group-item list-group-item-action disabled">Marketing</a>
      </div>
    );
  }
  
  export default Aside;