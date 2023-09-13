import { Grid, FormControl, InputLabel, Select, MenuItem,   } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { addMedicData } from "../../../indexModles/features/userData/medicData.js/medicData"

const sm = { width: '25%', maxWidth: '25%', padding:'5px' }

export default function MedicData(){
    const dispatch = useDispatch()
    const medicData = useSelector(state => state.medicData)

    const handleMedicData = (event) => {dispatch(addMedicData(event.target.value))}
    console.log(medicData)
    return<>
        <Grid item xs={6}>
            <FormControl sx = {sm} >
                <InputLabel>Especialidad del Medico</InputLabel>
                <Select label="Genero" variant="filled" value = {medicData} onChange={handleMedicData}>
                    <MenuItem value={'masculino'}>Masculino</MenuItem>
                    <MenuItem value={'femenino'}>Femenino</MenuItem>

                </Select>
            </FormControl>
        </Grid>
    </>
}