//React
import * as React from 'react';
import { useState } from 'react';

//MUI
import { Grid, InputLabel, Select, MenuItem, FormControl, TableContainer,Table, Paper, TableHead, TableBody, TableRow, TableCell, Button} from "@mui/material"

//redux
import { useDispatch, useSelector } from 'react-redux';
import { addActiveEmatology, removeActiveEmatology } from '../../../../indexModles/features/ematology/activeEmatology';
import { addEmatology, removeEmatology, setEmatology } from '../../../../indexModles/features/ematology/ematologyList';
//Axios
import axios from 'axios';

function BloodTestSelect(){//selector
	const dispatch = useDispatch()
	//React States
	const[value, setValue] = useState("")//valor seleccionado
	const [disableBtn, setBtn] = useState(true)//controlar el boton
	const handleSymptom = (event) => {
		let aux = event.target.value
		setBtn(false)//al tocar el selector, activar el boton
		setValue( aux );
	}

	const ematologyList = useSelector(state => state.ematologyList)

	useState( () => {
        fetchEmatology() 
    }, [])

    async function fetchEmatology(){
        axios.get('http://localhost:300/tquimsang')
            .then(response => {
                dispatch(setEmatology(response.data))
				console.log(response.data)
            })
            .catch(e => {
                return e;
            });
    }
	//Redux
  
	return<>
		<Grid container style={{"backgroundColor":"white", "padding":"5%"}} >
			<Grid item xs={10}>
				<FormControl fullWidth sx={{"padding":"3%"}}>
					<InputLabel>Hematologuias</InputLabel>
					<Select label="Hematologuias" variant="outlined" value={value} onChange={handleSymptom}>
						{ematologyList.map((e) => <MenuItem value={e.nombre} key={e.id}>{e.nombre}</MenuItem>)}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={2} >
				<div className="centrate" style={{"position":"relative","top":"30%"}}>
					<Button variant='contained' disabled={disableBtn} fullWidth onClick={() => {
						const aux = value
						setValue('')//devolver select a valor nulo
						setBtn(true)//desactivar añadir
						dispatch(addActiveEmatology(aux))//añadir estado activo
						dispatch(removeEmatology(aux))
					}}>Agregar</Button>
  
				</div>
			</Grid>
		</Grid>
	</>
  }
  
  
  function BasicTable() {//tabla donde se reflejan los sintomas
	const activeEmatology = useSelector(state => state.activeEmatology)//sintomas activos por defecto = [] 
	const dispatch = useDispatch() 
	
	  return <Grid container>
        <Grid item xs={12}>
		<TableContainer component={Paper}>
		  <Table sx={{ minWidth: 650 }} aria-label="simple table" >
			<TableHead>
			  <TableRow>{/* aqui defino la cantidad de filas! */}
				<TableCell align="center"><h4><b>Examenes Selecionados</b></h4></TableCell>
				<TableCell align="center"></TableCell>
			  </TableRow>
			</TableHead>
	
			<TableBody>
			  {activeEmatology.map((e) => (
				<TableRow key={e.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
				  <TableCell align="center">{e.nombre}</TableCell>
				  <TableCell align="center"><Button variant="contained" onClick={() => {
					dispatch(addEmatology(e))//devuelve el valor a la lista usada por el selector
					dispatch(removeActiveEmatology(e.nombre))//quita el simtoma de la lista de activos, filtra por nombre
				  }}>Eliminar</Button></TableCell>
				</TableRow>
			  ))}
			</TableBody>
		  </Table>
		</TableContainer>
        </Grid>
		</Grid>
	}

export default function Hematology(){
    return<>
        <BloodTestSelect/>
        <BasicTable/>
    </>
}