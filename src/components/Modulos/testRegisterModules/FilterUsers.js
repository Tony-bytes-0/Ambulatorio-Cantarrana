import { TextField, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

//React
import { useState } from "react";
//Axios
import axios from "axios"
//Redux
import { useDispatch } from "react-redux";
//reducers
import { toggleUserData, togglefilterUser } from "../../../indexModles/features/registerController/registerController";
import { setId } from '../../../indexModles/features/userData/person/id'
import { setNombre } from '../../../indexModles/features/userData/person/nombre'
import { setApellido } from '../../../indexModles/features/userData/person/apellido'
import { setIdentificacion } from '../../../indexModles/features/userData/person/identificacion'
import { setSexo } from '../../../indexModles/features/userData/person/sexo'
import { setTipo_sangre } from '../../../indexModles/features/userData/person/tipo_sangre'
import { setFecha_de_nacimiento } from '../../../indexModles/features/userData/person/fecha_de_nacimiento'
import { setTelefono } from '../../../indexModles/features/userData/person/telefono'
import { setTelefono_emergencia } from '../../../indexModles/features/userData/person/telefono_emergencia'
import { setDireccion } from '../../../indexModles/features/userData/person/direccion'
import { setSector } from '../../../indexModles/features/userData/person/sector'
import { Box } from "@mui/system";


function BasicTable(props) {
    //Redux
    const dispatch = useDispatch()
  if(props.rows != null){
    return <Grid container>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>{/* aqui defino la cantidad de filas! */}
            <TableCell align="left"><b>ID</b></TableCell>
            <TableCell align="left"><b>Cedula</b></TableCell>
            <TableCell align="right"><b>Nombre</b></TableCell>
            <TableCell align="right"><b>Apellido</b></TableCell>
            <TableCell align="right"><b>Genero</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>{/* esta es la fila que muestra los datos */}
            <TableRow className="hoverDown"
                key={props.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} onClick={() => {//pasar todos los datos al store
                dispatch(setNombre(props.rows.nombre)); dispatch(setApellido(props.rows.apellido)); dispatch(setIdentificacion(props.rows.identificacion));
                dispatch(setSexo(props.rows.sexo)); dispatch(setFecha_de_nacimiento(props.rows.fecha_de_nacimiento)); dispatch(setTelefono(props.rows.telefono));
                dispatch(setTelefono_emergencia(props.rows.telefono_emergencia));dispatch(setTipo_sangre(props.rows.tipo_sangre));
                dispatch(setDireccion(props.rows.direccion)); dispatch(setSector('')); dispatch(setId(props.rows.id))
                dispatch(togglefilterUser(false))
            }}>
              <TableCell align="left">{props.rows.id}</TableCell>
              <TableCell align="left">{props.rows.identificacion}</TableCell>
              <TableCell align="right">{props.rows.nombre}</TableCell>
              <TableCell align="right">{props.rows.apellido}</TableCell>
              <TableCell align="right">{props.rows.sexo}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
  }else{
    return<Grid container direction="column" alignItems="center" justifyContent="center">
      <Grid item xs={12} className="centrate">No se Encontraron Resultados</Grid>
    </Grid>
  }
}

export default function FilterUsers(){//Main
  const [userFind, setUsers] = useState({})//aqui se almacenan los resultados
  const dispatch = useDispatch()


  function getUsers(){
    axios.post('http://localhost:300/buscarPersonasPorCedula', {"identificacion": dni})
    .then(response => {
      setUsers(response.data)
    })
    .catch(e => {
      alert('ocurrio algun error al intentar buscar usuarios')
    })
    // .finally(() => {console.log('se termino la busqueda!, dni:', dni, userFind)})
  }
  //React - Variables de Estado
  const [dni, setDni] = useState('')
  const handleDni = (event) => { setDni(event.target.value) }//cedula

    return<>
        <Grid container style={{"padding":"2%"}} className='fadeIn'>
          <Grid item xs = {12}><div className="centrate separator basicBorders tittle"><h4><b> Buscar Usuarios por cedula </b></h4></div> </Grid>

            <Grid item xs={10}>
                <TextField fullWidth label="cedula del Usuario" variant="filled" onChange={handleDni}/>
            </Grid>

            <Grid item xs={2} >
                <Box className='centrate'> <Button variant='contained' fullWidth onClick={() => {getUsers()}} 
                sx={{"margin":"1%"}}>Buscar!</Button></Box>
            </Grid>
            
            <BasicTable rows = {userFind[0]} />
            <Grid item xs = {12}>
                <Box className="centrate" >
                  <Button variant="contained" style={{"padding":"2%", "margin":"2%"}}  onClick={() => {
                      dispatch(togglefilterUser(false))
                      dispatch(toggleUserData(true))
                  }}>Usuario Nuevo</Button>
                </Box>

            </Grid>
        </Grid>
    </>
}