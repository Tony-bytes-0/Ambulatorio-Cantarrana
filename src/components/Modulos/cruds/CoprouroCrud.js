//React
import { useState } from "react";
import ClipLoader from 'react-spinners/ClipLoader';
//Mui
import { Grid, Button,Table,TableBody,TableCell, TableContainer, TableHead, TableRow, Paper, Modal, ButtonGroup, TextField } from "@mui/material";
//Axios
import axios from "axios"
//Redux
import { useSelector, useDispatch } from "react-redux";
import { setCoprouro } from "../../../indexModles/features/coprouro/coprouro";




const emptyObject = {id:"", body:""}//estado inicial del estado del usuario seleccionado - Debo hace esto dinamico


function BasicTable() { const [selected, setSelected] = useState(emptyObject)	
  	//WEAS DE LA MODAL
  	const [modalState, setModal] = useState(false)
    function openModal(rowId){//al abrir la modal, se llenan los datos del usuario seleccionado: "selected"
        setModal(true); 
        //buscar en la lista de objetos, por ID
        const found = labTestList.find( x =>  x.id === rowId)
        if (found){ setSelected(found) } else{ console.log('ocurrio algun error al buscar el id: ', rowId) } //DEV
    } 
  	const closeModal = () => {setModal(false)}
    //Modal de confirmacion
    const [confirm, setConfirm] = useState(false)
    const openConfirm = () => {setConfirm(true)}
    const closeConfirm = () => {setConfirm(false)}

	const [update, setUpdate ] = useState(false)
	const openUpdate = () => {setUpdate(true)}
	const closeUpdate = () => {setUpdate(false)}

    function normalize(){//al finalizar, vuelve al estado inicial
        document.getElementById('getBtn').click()
        setConfirm(false)
        setModal(false)
    }
    //CRUD
    const labTestList = useSelector(state => state.coprouro)
    
    
    function deleteUser(id){
        axios.delete('http://localhost:300/tcoprouro/' + id)
            .then(response => {
                console.log('respuesta de Eliminado', response)
            })
            .catch(e => {
                console.log('ocurrio algun tipo de error')
            })
            .finally( () => normalize() )
    }


  return <>
    {/* este boton lo uso para cerrar las modeles y hacer un get a la bd, actuallizando todo */}
    <Button id='normalize' onClick={() => {normalize()}}></Button>
    
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>{/* aqui defino la cantidad de filas! */}
            <TableCell align="center"><b>ID</b></TableCell>
            <TableCell align="center"><b>Examenes Coprouro</b></TableCell>
            <TableCell align="center"><b></b></TableCell>{/* rellenar para el boton */}
          </TableRow>
        </TableHead>

        <TableBody>
        {console.log(labTestList)}
          {labTestList.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.nombre}</TableCell>
              <TableCell align="center"><Button variant='contained' onClick={() => {openModal(row.id)}}>Examinar</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* Modal de Vista de Especificaciones*/}
    <Modal open={modalState} disableScrollLock={false} onClose={closeModal}>
      <Grid container direction="column" alignItems="center" justifyContent="center">
        <div className='modalCentratedSmall'>
        <Grid item xs = {12}><div className="centrate separator basicBorders tittle"><h4><b>Especificaciones</b></h4></div> </Grid>
            
            <Grid item xs={12} className='centrate'> ID: {selected.id} </Grid>
            <Grid item xs={12} className='centrate'> Nombre: {selected.nombre} </Grid>

           

            <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons" className="basicBorders">
				<Button variant="contained" onClick={closeModal} className='basicBorders'>Volver</Button>
				<Button variant="contained" onClick={openUpdate}>Editar</Button>
				<Button variant="contained" onClick={openConfirm}>Eliminar</Button>
            </ButtonGroup>

        </div>
      </Grid>
    </Modal>
	{/* Modal para actualizar */}
	<Modal open={update} onClose={closeUpdate} disableScrollLock={false}>
		<Grid container direction="column" alignItems="center" justifyContent="center">
			<div className="updateModal modalDiv modalColor basicBorders">
                <CreateAllergie target={selected} toggleUpdate id={selected.id}/>
				<div className="centrate"><Button variant='contained' onClick={closeUpdate}>Terminar Edicion</Button></div>
			</div>
		</Grid>
	</Modal>

    {/* modal de confirmacion para eliminar */}
    <Modal open={confirm} onClose={closeConfirm}>
        <Grid container direction="column" alignItems="center" justifyContent="center">
            <div className='modalCentratedSmall'>Borrar Seleccion?</div>
            <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons" className="basicBorders">
            	<Button variant="contained" onClick={closeConfirm} className='basicBorders'>Volver</Button>
            	<Button variant="contained" onClick={() => {deleteUser(selected.id)}}>Confirmar</Button>
            </ButtonGroup>
        </Grid>
    </Modal>
    </>
}

function CreateAllergie (props){
    const [data, setData] = useState('')
    const handleData = (event) => {setData(event.target.value)}
    const [welcome, setWelcome] = useState(true)//para hacer acciones solamente al cargar la pagina :)
    if(welcome && props.toggleUpdate){//esto trigerea al abrir la modal de edicion
        setWelcome(false)
        setData(props.target.tipo)
    }
    function postData(){//extends
        if(data === ''){alert('inserte algun dato')}

        else{//si alguno de los campos contienen datos:
            axios.post('http://localhost:300/tcoprouro/', {nombre:data})
            .then((response) =>{
                alert('Tipo de Examen de Coprouro Creado con Exito');
                setData('')
            })
            .catch((response) => {
                alert('ocurrio un error, recargue la paguina :(')
            })
            .finally(() => document.getElementById('getBtn').click())
        } 
    }
    function updateData(){
        if(data === ''){alert('inserte algun dato')}

        else{//si alguno de los campos contienen datos:
            axios.put('http://localhost:300/tcoprouro/' + props.id, {nombre:data})
            .then((response) =>{
                alert('Datos de la alergia Actualizados con exito');
                setData('')
            })
            .catch((response) => {
                alert('ocurrio un error, recargue la paguina :(')
            })
            .finally(() => document.getElementById('getBtn').click())
        } 
    }
    function RenderedButton(props){
        if(props.update){
            return <Button variant="contained" onClick={updateData}>Actualizar</Button>
        }
        else{
            return <Button variant="contained" onClick={postData}>crear</Button>
        }
    }
    return <><Grid container direction="column" alignItems="center" justifyContent="center">
        <TextField variant="outlined" label="Tipo de Examen" value={data} onChange={handleData} />
        <RenderedButton update={props.toggleUpdate} />
    </Grid></>
}

export default function CoprouroCrud(){//Main
  const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    async function fetchLabTest() {
        setLoading(true)
        axios.get('http://localhost:300/tcoprouro/')//Debo hacer esto dinamico
            .then(response => {
                dispatch(setCoprouro(response.data));
                setLoading(false)
            })
            .catch(e => {
                setLoading(false)
                return e;
            });
    }

    return<>
        <Grid container style={{"padding":"2%"}} className='fadeIn'>
          <Grid item xs = {12}><div className="centrate separator basicBorders tittle"><h4><b>Gestionar Examenes Coprouro</b></h4></div> </Grid>

            <CreateAllergie/>
            <Grid item xs={12} >
                <div className="centrate" style={{"position":"relative","top":"10%"}} >
                    <Button id='getBtn' variant='contained' fullWidth onClick={() => {fetchLabTest()}}>Mostrar Examenes Coprouro</Button>
                </div>    
            </Grid>

            
            {loading ? (
              <div className="spinnerContainer">
                <ClipLoader color={'#52C5BC'} size={500} />
              </div>
              ) : (
                <BasicTable />
              )
            }
            
        </Grid>
    </>
}