import React from "react";
import MainBase from "./MainBase";
import MainInscricao from "./MainInscricao";

function Main(props) {
  if(props.desconto === "sim"){
    return <MainInscricao/>
  }  
  else{
    return <MainBase/>
  }
}
export default Main;