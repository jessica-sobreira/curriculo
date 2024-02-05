import { Container, Grid } from "@mui/material";
import { CardRecomendacao } from "./CardRecomendacao";
import { useAppSelector } from "../config/hooks";



export function Recomendacoes() {
    const recomendacoes = useAppSelector((store) => store.recomendacoes);


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