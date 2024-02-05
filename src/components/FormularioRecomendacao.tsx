import { Grid } from "@mui/material";
import { Recomendacao } from "../model/recomendacao.model";


const submitForm = (e: any) => {
    e.preventDefault()

    const novaRecomendacao: Recomendacao = {
        nome: e.target.nome.value,
        conteudo: e.target.conteudo.value,
    }

    // setRecomendacoes([...recomendacoes, novaRecomendacao]);

}

export function FormularioRecomendacao() {
    return (
        <>
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

        </>
        
    )
}