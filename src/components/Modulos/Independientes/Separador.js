import { Grid } from "@mui/material"

export default function Separador(props){
    return <Grid item xs = {12}>
        <div className="centrate separator tittle basicBorders">
            <h4><b>{props.label}</b></h4>
        </div>
    </Grid>
}