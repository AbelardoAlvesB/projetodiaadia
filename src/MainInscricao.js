import React, { useState } from "react";
import "./MainInscricao.css"

function MainInscricao(props){

    const [contagem, setContagem] = useState(1)
    const [menslidade, setMensalidade] = useState(0)
    const manipularIdade = () => {
        setContagem(contagem + 1)
        if(contagem <= 30){
            setMensalidade(1000 - ((contagem/100) * 1000))
        }
        else{
            setMensalidade((1000 - (30/100) * 1000))
        }   
    }
    return(
        <div>
            <h1 class="titulo">Inscreva-se para um de nossos cursos</h1>
            <h2 class="subtitulo">O desconto é concedido a todos de acordo com a idade.</h2>
            <br></br>
            <div class="aumentaridade">
                <buttom class="botaoidade" onClick={manipularIdade}>Aumentar Idade</buttom>
                <br></br>
                <h3 class="descricao">Idade: {contagem}</h3>
                <br></br>
            </div>
            <h4 class="descricao">Mensalidade a pagar: {menslidade}</h4>
        </div>
    )

}
    export default MainInscricao;