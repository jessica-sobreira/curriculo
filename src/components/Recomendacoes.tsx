import { Container, Grid } from "@mui/material";
import { CardRecomendacao } from "./CardRecomendacao";
import { useState } from "react";
import { Recomendacao } from "../model/recomendacao.model";

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

const [recomendacoes, setRecomendacoes] = useState<Recomendacao[]>(initialState);



export function Recomendacoes() {
    return (
        <>
        <Container>
            <h1>Recomendações</h1>

            <Grid container>
                {recomendacoes.map((item) => (
                    <CardRecomendacao recomendacao={item}></CardRecomendacao>
                ))}
            </Grid>

            <br/>    
        </Container>

    </>
    )
}