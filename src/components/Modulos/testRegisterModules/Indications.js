import { Grid, TextareaAutosize, Box } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setIndications } from "../../../indexModles/features/preMedicalRecord/indications"

export default function Indications() {
    const dispatch = useDispatch()
    const x = useSelector(state => state.indications)
    const handleX = (event) => { dispatch(setIndications(event.target.value)) }



    return<>
        <Grid container>
        <Grid item xs={12}><Box className = 'centrate' >
            <h4><b>Indicaciones</b></h4>
        </Box></Grid>
            <Grid item xs={12}>
                <div className="centrate">
                    <TextareaAutosize className="centrate" aria-label="minimum height" minRows={3} placeholder="" style={{ width: "60%" }}
                    value={x} onChange={handleX}/>
                </div>
            </Grid>
        </Grid></>
}