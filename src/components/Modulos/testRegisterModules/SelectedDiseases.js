import { TableContainer, Table, TableRow, TableCell, Grid, Paper, Button, TableBody  } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { removeActiveDiseases } from "../../../indexModles/features/Symptoms/activeDiseases"
import { addDisease } from "../../../indexModles/features/Symptoms/diseases"
//allergias
import { addAllergie } from "../../../indexModles/features/allergies/allergieList"
import { removeActiveAllergies } from "../../../indexModles/features/allergies/activeAllergies"

export default function SelectedDiseases(){
    const dispatch = useDispatch()
    const activeDiseases = useSelector(state => state.activeDiseases)
    const activeAllergies = useSelector (state => state.activeAllergies)

    return<Grid item xs = {12}>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="simple table" >
          {/* <TableHead>
            <TableRow>{/*aqui defino la cantidad de filas!
              <TableCell align="center"><h4><b> Seleccion </b></h4></TableCell>
            </TableRow>
          </TableHead> */}
  
          <TableBody>
            {activeDiseases.map((e) => (
              <TableRow key={e.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">Enfermedad Cronica</TableCell>
                <TableCell align="center">{e.nombre}</TableCell>
                <TableCell align="center"><Button variant="contained" color="error"  onClick={() => {
                  dispatch(addDisease(e))
                  dispatch(removeActiveDiseases(e))
                }}>Eliminar</Button></TableCell>
              </TableRow>
            ))}

            {activeAllergies.map((e) => (
              <TableRow key={e.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">Alergia</TableCell>
                <TableCell align="center">{e.tipo}</TableCell>
                <TableCell align="center"><Button variant="contained" color="error"  onClick={() => {
                  dispatch(addAllergie(e))
                  dispatch(removeActiveAllergies(e))
                }}>Eliminar</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
}
