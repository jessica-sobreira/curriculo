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
    {
        nome: "Jéssica",
        conteudo: "Lisa foi uma excelente colega"
    }
];



export const recomendacoesSlice = createSlice({
    name: "recomendacoes",
    initialState,
    reducers: {
        criarRecomendacao: (state, action) => {
            return [...state, action.payload];

        }
    }
})

export default recomendacoesSlice.reducer;

export const { criarRecomendacao } = recomendacoesSlice.actions;