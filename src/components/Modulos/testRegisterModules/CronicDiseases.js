import { FormControl, Grid, InputLabel, MenuItem, Select, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from 'react-spinners/ClipLoader';
import { addActiveDiseases } from "../../../indexModles/features/Symptoms/activeDiseases";
import { removeDisease, setDisease } from "../../../indexModles/features/Symptoms/diseases";


export default function CronicDiseases(){
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)//tiempo de espera
    const [disableBtn, setBtn] = useState(true)//controlar el boton

    //const [selectedValues, setSelected] = useState([{id:0, nombre:'vacio'}])//valores del servidor
    const selectedValues = useSelector(state => state.diseases)
    const handleX = (event) => { setX (event.target.value); setBtn(false) }
    const [x, setX] = useState('')//el valor que se busca obtener en cuestion
    const full =  { width: '100%', padding:'10px', display:'flex' }

    useState( () => {
        fetchCronicDiseases() 
    }, [])

    async function fetchCronicDiseases(){
        setLoading(true)
        axios.get('http://localhost:300/enfermedad')
            .then(response => {
                dispatch(setDisease(response.data))
                setLoading(false)
            })
            .catch(e => {
                setLoading(false)
                return e;
            });
    }


    return<Grid item xs={6}>

                {loading ? ( <ClipLoader color={'#52C5BC'} size={500} />) : (
                    <Box sx={full}>
                        <FormControl sx = {{'width': '100%','display':'flex'}}>
                            <InputLabel>Enfermedades</InputLabel>
                            <Select label="Enfermedad" variant="filled" value={x} onChange={handleX} >
                                {selectedValues.map((e) =>  <MenuItem key={e.id} value={e.nombre}> {e.nombre} </MenuItem> )}
                            </Select>
                        </FormControl>
                        <Button disabled={disableBtn} onClick={() => {
                            dispatch(addActiveDiseases(x))
                            dispatch(removeDisease(x))
                            setX('')
                            setBtn(true)
                        }}><Typography sx ={{fontSize:"40px"}}>+</Typography></Button>
                        </Box>
                    )
                }
       

    </Grid>
}