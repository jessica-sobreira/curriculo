import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Recomendacao } from "../model/recomendacao.model";

interface CardRecomendacaoProps {
    recomendacao: Recomendacao
}

export function CardRecomendacao(props: CardRecomendacaoProps) {
    return (
        <Grid container xs={3}>
            <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.recomendacao.nome}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.recomendacao.conteudo}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        </Grid>
    )
}