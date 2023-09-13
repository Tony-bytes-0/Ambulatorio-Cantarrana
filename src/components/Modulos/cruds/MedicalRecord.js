//React
import { useState } from "react";
import ClipLoader from 'react-spinners/ClipLoader';
//Mui
import { Grid, Button,Table,TableBody,TableCell, TableContainer, TableHead, TableRow, Paper, Modal, ButtonGroup, TextField, Box } from "@mui/material";
//Axios
import axios from "axios"
//Redux
import { useSelector, useDispatch } from "react-redux";
import { setMedicalRecord } from "../../../indexModles/features/medicalRecord";
import Separador from "../Independientes/Separador"

const emptyObject = {phistoria:{id:"",  person:{identificacion:"", nombre:"", apellido:"", telefono:"", telefono_emergencia:"", sexo:"", tipo_sangre:""} }}


function BasicTable(props) { const [selected, setSelected] = useState(emptyObject)	
    //const dispatch = useDispatch()
  	//WEAS DE LA MODAL
  	const [modalState, setModal] = useState(false)
    function openModal(rowId){//al abrir la modal, se llenan los datos del usuario seleccionado: "selected"
        setModal(true); 
        //buscar en la lista de objetos, por ID
        const found = medicalRecord.find( x =>  x.id === rowId)
        if (found){ setSelected(found) }
        else{ console.log('ocurrio algun error al buscar el id: ', rowId) }
    } 
  	const closeModal = () => {setModal(false)}
    //Modal de confirmacion
    const [confirm, setConfirm] = useState(false)
    const closeConfirm = () => {setConfirm(false)}

	const [update, setUpdate ] = useState(false)
	const closeUpdate = () => {setUpdate(false)}

    function normalize(){//al finalizar, vuelve al estado inicial
        document.getElementById('getBtn').click()
        setConfirm(false)
        setModal(false)
    }
    const medicalRecord = useSelector(state => state.medicalRecord) //DEV

    function deleteUser(id){
        axios.delete('http://localhost:300/phistoria/' + id)
            .then(response => {
                console.log('se ha borrado con exito el usuario: ', response)
            })
            .catch(e => {
                console.log('ocurrio algun tipo de error')
            })
            .finally( () => normalize() )
            
    }


  return <>
    {/* este boton lo uso para cerrar las modeles y hacer un get a la bd, actuallizando todo */}
    <Button id='normalize' onClick={() => {normalize()}}></Button>
    
    <TableContainer component={Paper}  >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>{/* aqui defino la cantidad de filas! */}
            <TableCell align="center"><b>Cedula del paciente</b></TableCell>
            <TableCell align="center"><b>Nombre</b></TableCell>
            <TableCell align="center"><b>Apellido</b></TableCell>
            <TableCell align="center"><b>Genero</b></TableCell>
            <TableCell align="center"><b>Fecha de Consulta</b></TableCell>
            <TableCell align="center"><b>Telefono</b></TableCell>
            <TableCell align="center"><b>Telefono de Emergencia</b></TableCell>
            <TableCell align="center"><b>Razon de Visita</b></TableCell>
            {/* <TableCell align="right"><b>Presion Arterial</b></TableCell>
            <TableCell align="right"><b>Sintomas</b></TableCell> */}

          </TableRow>
        </TableHead>

        <TableBody>
          {console.log('este es el mapeado que no lee el person: ', medicalRecord)}
          {medicalRecord.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="center">{row.phistoria.person.identificacion}</TableCell>
              <TableCell align="center">{row.phistoria.person.nombre}</TableCell>
              <TableCell align="center">{row.phistoria.person.apellido}</TableCell>
              <TableCell align="center">{row.phistoria.person.sexo}</TableCell>
              <TableCell align="center">{row.phistoria.fecha}</TableCell>
              <TableCell align="center">{row.phistoria.person.telefono}</TableCell>
              <TableCell align="center">{row.phistoria.person.telefono_emergencia}</TableCell>
              <TableCell align="center">{row.phistoria.razon_visita}</TableCell>


              <TableCell align="right"><Button variant='contained' onClick={() => {openModal(row.id)}}>Examinar</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* Modal de Vista de datos del usuario*/}
    <Modal open={modalState} disableScrollLock={false} onClose={closeModal} className='scroll'>
      <Grid container direction="column" alignItems="center" justifyContent="center">
        <div className='modalCentratedFull '>
        <Separador label='Datos Personales' />

            <Grid item xs={12} className='centrate'> Nombre: {selected.phistoria.person.nombre} </Grid>
            <Grid item xs={12} className='centrate'> Apellido: {selected.phistoria.person.apellido}</Grid>
            <Grid item xs={12} className='centrate'> Apellido: {selected.phistoria.person.sexo}</Grid>
            <Grid item xs={12} className='centrate'> Tipo de Sangre: {selected.phistoria.person.tipo_sangre}</Grid>  
            <Grid item xs={12} className='centrate'> Cedula: {selected.phistoria.person.identificacion}</Grid>
            <Grid item xs={12} className='centrate'> Telefono: {selected.phistoria.person.telefono}</Grid>
            <Grid item xs={12} className='centrate'> Telefono de Emergencia: {selected.phistoria.person.telefono_emergencia}</Grid>

        <Separador label='Datos de la Visita' />
            <Grid item xs={12} className='centrate'> Fecha de Consulta {selected.phistoria.fecha} </Grid>
            <Grid item xs={12} className='centrate'> Razon de visita: {selected.phistoria.razon_visita}</Grid>
            <Grid item xs={12} className='centrate'> Lista de Sintomas: {selected.phistoria.sintomas}</Grid>
            <Grid item xs={12} className='centrate'> Temperatura: {selected.phistoria.temperatura}</Grid>
            <Grid item xs={12} className='centrate'>Tension : {selected.phistoria.tension} ( Sistolica y Diastolica ) </Grid>{/*trabajando aqui*/}
            <Grid item xs={12} className='centrate'> Altura: {selected.phistoria.altura}</Grid>
            <Grid item xs={12} className='centrate'> Peso: {selected.phistoria.peso}</Grid>

        <Separador label='Examenes a Realizar' />
            <Grid item xs={12} className='centrate'> Quimica Sanguinea: {selected.phistoria.peso}</Grid>
            <Grid item xs={12} className='centrate'> copro/Uro: {selected.phistoria.peso}</Grid>
            <Grid item xs={12} className='centrate'> Radiografías: {selected.phistoria.peso}</Grid>

            { console.log(medicalRecord) }
            
            {/* <Grid item xs={12} className='centrate'></Grid>
            <Grid item xs={12} className='centrate'>{selected}</Grid> */}

            <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons" className="basicBorders">
            {/* <Button variant="contained" onClick={() => openMR(selected.id)}>Historias Medicas</Button> */}
            <Button variant="contained" onClick={closeModal} className='basicBorders'>Volver</Button>
            {/* <Button variant="contained" onClick={openUpdate}>Editar Datos</Button>
            <Button variant="contained" onClick={openConfirm}>Eliminar Usuario</Button> */}
				

            </ButtonGroup>

        </div>
      </Grid>
    </Modal>

	{/* Modal para actualizar */}
	<Modal open={update} onClose={closeUpdate} disableScrollLock={false}>
		<Grid container direction="column" alignItems="center" justifyContent="center">
			<div className="updateModal modalDiv modalColor">
				<div className="centrate"><Button variant='contained' onClick={closeUpdate}>Terminar Edicion</Button></div>
			</div>
		</Grid>
	</Modal>

    {/* modal de confirmacion para eliminar */}
    <Modal open={confirm} onClose={closeConfirm}>
        <Grid container direction="column" alignItems="center" justifyContent="center">
            <div className='modalCentratedSmall'>Borrar este Usuario?</div>
            <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons" className="basicBorders">
            	<Button variant="contained" onClick={closeConfirm} className='basicBorders'>Volver</Button>
            	<Button variant="contained" onClick={() => {deleteUser(selected.id)}}>Confirmar</Button>
            </ButtonGroup>
        </Grid>
    </Modal>
    </>
}

function StaticTableData (){
  <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>{/* aqui defino la cantidad de filas! */}
            <TableCell><b>ID</b></TableCell>
            <TableCell align="right"><b>Nombre</b></TableCell>
            <TableCell align="right"><b>Apellido</b></TableCell>
            <TableCell align="right"><b>Cedula</b></TableCell>
            <TableCell align="right"><b>Genero</b></TableCell>
            <TableCell align="right"><b></b></TableCell>
          </TableRow>
        </TableHead>
        </Table>
        </TableContainer>
}



export default function FilterUsers(props){//Main
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState(''); const handleSearch = (event) => {setSearch(event.target.value)}

  function fetchDni(){
    setLoading(true)
    axios.get('http://localhost:300/phistoria')
        .then(response => {
          const result = response.data.filter(x => search === x.phistoria.person.identificacion);console.log(result)
            if(result === undefined){alert('No existen Registros con los datos indicados')}
            else{ dispatch(setMedicalRecord(result)) }
            setLoading(false)//const result = response.data; console.log(typeof(search)) //const coincidencias = response.data.find( x => search === x.person )
        })
        .catch(e => {
            setLoading(false)
            return e;
        });
  }
    const dispatch = useDispatch()

    async function fetchMedicalRecords() {
      /*setLoading(true)
        axios.get('http://localhost:300/phistoria')
            .then(response => {
                dispatch(setMedicalRecord(response.data)); console.log('phistorias : ', response.data)
                setLoading(false)
            })
            .catch(e => {
                setLoading(false)
                return e;
            });*/

      axios.get('http://localhost:300/historiam')
        setLoading(true)
        .then(response => {
          dispatch(setMedicalRecord(response.data)); console.log('historias medicas: ', response.data)
          setLoading(false)
        })
        .catch(e => {
          setLoading(false)
          return e;
        });
    }

    return<>
        <Grid container style={{"padding":"2%"}} >
          <Grid item xs = {12}><div className="centrate separator basicBorders tittle"><h4><b>Mostrar todas las Historias Medicas</b></h4></div> </Grid>
          
            <Grid item xs={12} >
                <div className="centrate" style={{"position":"relative","top":"10%"}} >
                    <Button id='getBtn' variant='contained' fullWidth onClick={() => {fetchMedicalRecords()}}>Mostrar todas </Button>
                </div>  
            </Grid>

            <Grid item xs = {12} style={{"padding":"2%"}}>
              <Box className='centrate'> <TextField variant='outlined' label='Cedula' value={search} onChange={handleSearch}></TextField> 
              <Button variant='contained' onClick={() => { fetchDni() }}>Buscar por Cedula</Button> 
            </Box>

            </Grid>

            
            {loading ? (
              <div className="spinnerContainer">
                <ClipLoader color={'#52C5BC'} size={500} />
                <StaticTableData />
              </div>
              ) : (
                <BasicTable />
              )
            }
            
        </Grid>
    </>
}
