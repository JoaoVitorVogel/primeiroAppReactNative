import React from "react";
import { StyleSheet, View } from "react-native";

import Topo from "./componentes/Topo.js";
import Detalhes from "./componentes/Detalhes.js";
import Botao from "./componentes/Botao.js";
import Itens from "./componentes/Itens.js";

export default function Cesta( {topo, detalhes, itens} ){
    return <>
        <Topo {...topo} />
        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Botao {...detalhes}/>
            <Itens {...itens}/>
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});