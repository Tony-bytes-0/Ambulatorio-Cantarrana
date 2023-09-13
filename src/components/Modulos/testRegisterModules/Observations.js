import { Button, Grid, TextareaAutosize } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setObservations } from "../../../indexModles/features/preMedicalRecord/obsevations"

export default function Obsevations() {
    const dispatch = useDispatch()
    const [showObservations, setShow] = useState(false)
    const x = useSelector(state => state.obsevations)
    const handleX = (event) => { dispatch(setObservations(event.target.value)) }



    if(showObservations){return<>
        <Grid container>
            <Grid item xs={12}>
                <div className="centrate">
                    <TextareaAutosize className="centrate" aria-label="minimum height" minRows={3} placeholder="" style={{ width: "60%" }}
                    value={x} onChange={handleX}/>
                </div>
            </Grid>

            <Grid item xs={12}>
                <div className="centrate">
                    <Button variant="contained" onClick={() => {setShow(false)} }>Eliminar Descripcion</Button>
                </div>
            </Grid>
        </Grid></>
    }
    
    
    
    else{
        return <Grid item xs={12} sx = {{"marginTop":"20px"}}>
            <div className="centrate" >
                <Button variant="contained" onClick={() => {setShow(true)} }>Insertar Descripcion de la Enfermedad Actual</Button>
            </div>
        </Grid>
    }
}