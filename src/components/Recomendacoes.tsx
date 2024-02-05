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

const submitForm = (e: any) => {
    e.preventDefault()

    const novaRecomendacao: Recomendacao = {
        nome: e.target.nome.value,
        conteudo: e.target.conteudo.value
    }

    setRecomendacoes([...recomendacoes, novaRecomendacao]);

}

export function Recomendacoes() {
    return (
        <Container>
            <h1>Recomendações</h1>

            <Grid container>
                {recomendacoes.map((item) => (
                    <CardRecomendacao recomendacao={item} key={item.nome}></CardRecomendacao>
                ))}
            </Grid>

            <br/>

            <h2>Adicionar recomendação</h2>

            <Grid container>
                <Grid>
                    <form onSubmit={submitForm}>
                        <label>Nome:</label>
                        <input type="text" name="nome" />
                        <br/>
                        <label>Conteúdo</label>
                        <input type="text" name="conteudo" />
                        <br/>
                        <button type="submit">Adicionar</button>
                    </form>
                </Grid>
            </Grid>
    
        </Container>

    )
}