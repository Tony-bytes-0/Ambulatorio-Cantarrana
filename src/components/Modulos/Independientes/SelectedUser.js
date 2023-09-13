//MUI
import { Grid } from "@mui/material"
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
//Redux
import {  useSelector } from "react-redux";
import Separador from "./Separador";

export default function SelectedUser(){

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body1 ,
        padding: theme.spacing(1.5),
        textAlign: 'center',
        color: 'black',
      }));

    const selectedUser = useSelector(state => state.userData)
    //console.log(selectedUser)
    return<><Grid className='fadeIn' container sx={{margin:'2%'}}>

    <Separador label='Datos Cargados' />
        <Grid item xs = {6}>
            <Stack spacing={2}>
                <Item>Nombre: {selectedUser.nombre}</Item>
                <Item>Apellido: {selectedUser.apellido}</Item>
                <Item>Genero: {selectedUser.sexo} </Item>
                <Item>Cedula: {selectedUser.identificacion}</Item>
            </Stack>
        </Grid>

        <Grid item xs = {6}>
            <Stack spacing={2}>
                <Item>Telefono: {selectedUser.telefono}</Item>
                <Item>Telefono de Emergencia: {selectedUser.telefono_emergencia}</Item>
                <Item>Tipo de Sangre: {selectedUser.tipo_sangre}</Item>
                {console.log(selectedUser)}
                {/* <Item>Sector: {selectedUser.nombre_sector.nombre_sector}</Item>  */}

            </Stack>
        </Grid>
        <Grid item xs = {12}> <Item>Direccion: { selectedUser.direccion }</Item></Grid>
    </Grid></>
}