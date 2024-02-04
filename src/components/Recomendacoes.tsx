import { Container, Grid } from "@mui/material";
import { CardRecomendacao } from "./CardRecomendacao";

export function Recomendacoes() {
    return (
        <Container>
            <h1>Recomendações</h1>

            <Grid container>
                <CardRecomendacao />
                
            </Grid>
    
        </Container>

    )
}