import { Grid, TextField, FormControl, TableContainer,Table, Paper, TableHead, TableBody, TableRow, TableCell, Button, Typography} from "@mui/material";
import { addActiveSymptom, removeActiveSymptom } from "../../../indexModles/features/Symptoms/ActiveSymptoms";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

function BasicTable() {//tabla donde se reflejan los sintomas
  const activeSymptoms = useSelector(state => state.activeSymptoms)//sintomas activos por defecto = [] 
  const dispatch = useDispatch() 
  
    return <Grid container sx={{"marginTop":"10px"}}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
          <TableHead>
            <TableRow>{/* aqui defino la cantidad de filas! */}
              <TableCell align="center"><h4><b>Sintomas Detectados</b></h4></TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {activeSymptoms.map((e) => (
              <TableRow key={e.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">{e.body}</TableCell>
                <TableCell align="center"><Button variant="contained" color="error" onClick={() => {
                  dispatch(removeActiveSymptom(e.body))//quita el simtoma de la lista de activos, filtra por nombre
                }}>Eliminar</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>
  }


export default function SymptomSelect(){//selector
    const dispatch = useDispatch()
    //React States
    const[symptom, setSymptom] = useState("")
    const handleSymptom = (event) => { setSymptom(event.target.value); setBtn(false) }//al tocar el selector, activar el boton
  
    const [disableBtn, setBtn] = useState(true)//controlar el boton
  
  
    return<>
        <Grid container >
            <Grid item xs={10}>
                <FormControl fullWidth sx={{"padding":"3%"}}>
                    <TextField variant="outlined" label='Sintoma' value={symptom} onChange={handleSymptom}></TextField>
                </FormControl>
            </Grid>
            <Grid item xs={2} >
                <div className="centrate" style={{"position":"relative","top":"30%"}}>
                    <Button variant='contained' disabled={disableBtn} fullWidth onClick={() => {
                      const aux = symptom
                      dispatch(addActiveSymptom(aux))//añadir estado activo
                      setBtn(true)//desactivar añadir
                      setSymptom("")
                    }}><Typography sx ={{fontSize:"20px"}}>+</Typography></Button>
  
                </div>
            </Grid>
            <BasicTable />
        </Grid>
    </>
  }