import { createSlice } from "@reduxjs/toolkit";
import { Recomendacao } from "../../model/recomendacao.model";

const initialState: Recomendacao[] = [
    {
        nome: "Marge",
        conteudo: "Lisa é uma filha adorável"
    },
    {
        nome: "Homer",
        conteudo: "Lisa é muito inteligente"
    },
];



export const recomendacoesSlice = createSlice({
    name: "recomendacoes",
    initialState,
    reducers: {}
})