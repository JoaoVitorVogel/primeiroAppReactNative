import React from "react";

import Texto from "../../../componentes/Texto";

export default function Itens({titulo, lista}){
    return <>
        <Texto>{titulo}</Texto>
        { lista.map(( {nome, imagem}) => {
            return <Texto>{ nome }</Texto>
        })}
    </>
}