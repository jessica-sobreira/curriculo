import { createSlice } from "@reduxjs/toolkit";
import { Recomendacao } from "../../model/recomendacao.model";

const initialState: Recomendacao[] = [
    {
        id: 1,
        nome: "Marge",
        conteudo: "Lisa é uma filha adorável"
    },
    {
        id: 2,
        nome: "Homer",
        conteudo: "Lisa é muito inteligente"
    },
    {
        id: 3,
        nome: "Jéssica",
        conteudo: "Lisa foi uma excelente colega"
    }
];



export const recomendacoesSlice = createSlice({
    name: "recomendacoes",
    initialState,
    reducers: {
        criarRecomendacao: (state, action) => {
            return [...state, {
                ...action.payload,
            id: state.length + 1,
                
            }]

        },
        deletarRecomendacao: (state, action) => {
            return state.filter(item => item.id !== action.payload)
        }
    }
})

export default recomendacoesSlice.reducer;

export const { criarRecomendacao, deletarRecomendacao } = recomendacoesSlice.actions;