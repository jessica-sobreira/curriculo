import { Grid } from "@mui/material";
import { Recomendacao } from "../model/recomendacao.model";
import { useAppDispatch } from "../config/hooks";
import { criarRecomendacao } from "../config/modules/recomendacoesSlice";


export function FormularioRecomendacao() {
    const dispatch = useAppDispatch();

    const submitForm = (e: any) => {
        e.preventDefault()
    
        const novaRecomendacao: Recomendacao = {
            nome: e.target.nome.value,
            conteudo: e.target.conteudo.value,
        }

        dispatch(criarRecomendacao(novaRecomendacao))
    }



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