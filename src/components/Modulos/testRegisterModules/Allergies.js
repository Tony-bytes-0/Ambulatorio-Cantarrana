import { FormControl, Grid, InputLabel, MenuItem, Select, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ClipLoader from 'react-spinners/ClipLoader';
import { addActiveAllergies } from "../../../indexModles/features/allergies/activeAllergies";
import { removeAllergie, setAllergies } from "../../../indexModles/features/allergies/allergieList";


export default function Allergies(){
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)//tiempo de espera
    const [disableBtn, setBtn] = useState(true)//controlar el boton

    //const [selectedValues, setSelected] = useState([{id:0, tipo:'vacio'}])//valores del servidor
    const selectedValues = useSelector(state => state.allergieList)
    const handleX = (event) => { setX (event.target.value); setBtn(false) }
    const [x, setX] = useState('')//el valor que se busca obtener en cuestion, alergia
    const full = { width: '100%', padding:'10px', display:'flex' }
    
    useState( () => {
        getAllergies() 
    }, [])

    async function getAllergies(){
        setLoading(true)
        axios.get('http://localhost:300/alergia')
            .then(response => {
                dispatch(setAllergies(response.data))
                setLoading(false)
            })
            .catch(e => {
                setLoading(false)
                return e;
            });
    }


    return<Grid item xs={6}>

                {loading ? ( <ClipLoader color={'#52C5BC'} size={500} />) : (
                        <Box sx={ full } >
                        <FormControl sx = {{'width':'100%','display':'flex'}}>
                            <InputLabel>Alergias</InputLabel>
                            <Select label="Alergia" variant="filled" value={x} onChange={handleX} >
                                {selectedValues.map((e) =>  <MenuItem key={e.id} value={e.tipo}> {e.tipo} </MenuItem> )}
                            </Select>
                        </FormControl>
                        <Button disabled={disableBtn} sx={{"display":"flex"}} onClick={() => {
                            dispatch(addActiveAllergies(x))
                            dispatch(removeAllergie(x))
                            setX('')
                            setBtn(true)
                        }}> <Typography sx ={{fontSize:"40px"}}>+</Typography></Button>
                        </Box>
                    )
                }
       

    </Grid>
}