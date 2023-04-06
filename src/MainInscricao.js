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
            <h6>Inscreva-se para um de nossos cursos</h6>
            <h7>O desconto é concedido a todos de acordo com a idade.</h7>
            <br></br>
            <buttom class="botaoidade" onClick={manipularIdade}>Aumentar Idade</buttom>
            <br></br>
            <h8>Idade: {contagem}</h8>
            <br></br>
            <h8>Mensalidade a pagar: {menslidade}</h8>
        </div>
    )

}
    export default MainInscricao;