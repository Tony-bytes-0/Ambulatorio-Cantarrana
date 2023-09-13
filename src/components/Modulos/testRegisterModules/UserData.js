//React
import { useState, useEffect } from 'react'

//MUI Components
import { Grid, TextField, InputLabel, Select, MenuItem, FormControl, Button, TextareaAutosize, ButtonGroup, Box  } from "@mui/material"

//Redux
import { useDispatch, useSelector } from 'react-redux'
//import { addUserData } from '../../../indexModles/features/userData/userData'
import { togglefilterUser, toggleUserData } from '../../../indexModles/features/registerController/registerController'

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

//Axios
import axios from "axios"

//Modulos
import { bloodList } from '../Independientes/staticValuesList'//objeto con personas estatico
import Separador from '../Independientes/Separador'
// import UserType from './UserType'
//Iconos
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
//import EditIcon from '@mui/icons-material/Edit';
import { setMedicData } from '../../../indexModles/features/userData/medic'
import { setAuxData } from '../../../indexModles/features/userData/auxiliar'

import { setEstadoList } from '../../../indexModles/features/registerController/estadoList'
import { setMunicipioList } from '../../../indexModles/features/registerController/municipioList'
import { setParroquiaList } from '../../../indexModles/features/registerController/parroquiaList'
import { setComunidadList } from '../../../indexModles/features/registerController/comunidadList'
import { setSectorList } from '../../../indexModles/features/registerController/sectorList'





export default function UserData(props){//MAIN
    const dispatch = useDispatch() //DEV
    const validateNumber="[0-9]";
    //Estado de variables de datos
    const nombre = useSelector(state => state.nombre); 
    const apellido = useSelector(state => state.apellido);  
    const identificacion = useSelector(state => state.identificacion);
    const sexo = useSelector(state => state.sexo);
    const fecha_de_nacimiento = useSelector(state => state.fecha_de_nacimiento);
    const telefono = useSelector(state => state.telefono);
    const tipo_sangre = useSelector(state => state.tipo_sangre);
    const telefono_emergencia = useSelector(state => state.telefono_emergencia);
    const direccion = useSelector(state => state.direccion);
    const sector = useSelector(state => state.sector);



    const handleName = (event) => { dispatch(setNombre(event.target.value)) }//NAME
    const handleLastName = (event) => {dispatch(setApellido(event.target.value))}//LASTNAME   
    const handleGender = (event) => {dispatch(setSexo(event.target.value)) }//GENDER  
    const handleBirthdate = (event) => { dispatch(setFecha_de_nacimiento(event.target.value))}//BIRTHDATE
    const handleBloodType = (event) => { dispatch(setTipo_sangre(event.target.value)) }//BLOODTYPE
    const handleDirection = (event) => { dispatch(setDireccion(event.target.value)) }//DIRECTION
    const handleSector = (event) => { dispatch(setSector(event.target.value)) }//SECTOR
    const handleDni = (event) => { if(event.target.value.match(validateNumber) != null && event.target.value.length < 10) { dispatch(setIdentificacion(event.target.value)) } }//DNI
    const handleCellphone = (event) => {  if(event.target.value.match(validateNumber) != null){ dispatch(setTelefono(event.target.value)) } }//CELLPHONE
    const handleEmergency = (event) => {  if(event.target.value.match(validateNumber) != null){ dispatch(setTelefono_emergencia(event.target.value)) } }//EMERGENCY

    useEffect( () => {
            function fetchEstado (){
        axios.get('http://localhost:300/estado')
        .then(response => { dispatch(setEstadoList(response.data)); }).catch(response => { console.log(response) })
    }
    function fetchMunicipio (){
        axios.get('http://localhost:300/municipio')
        .then(response => { dispatch(setMunicipioList(response.data)) }).catch(response => { console.log(response) })
    }
    function fetchParroquia (){
        axios.get('http://localhost:300/parroquia')
        .then(response => { dispatch( setParroquiaList(response.data) ) }).catch(response => { console.log(response) })
    }
    function fetchComunidad (){
        axios.get('http://localhost:300/comunidad')
        .then(response => { dispatch( setComunidadList(response.data) ) }).catch(response => { console.log(response) })
    }
    function fetchSector (){
        axios.get('http://localhost:300/sector')
        .then(response => { dispatch(setSectorList(response.data)) }).catch(response => {console.log(response)})
    }
        fetchMunicipio(); fetchParroquia(); fetchSector(); fetchEstado();fetchComunidad(); 
        dispatch(setSector(''));
    }, [dispatch])

    const [estado, setEstado] = useState(''); 
    const [municipio, setMunicipio] = useState(''); 
    const [parroquia, setParroquia] = useState(''); 
    const [comunidad, setComunidad] = useState(''); 

    const handleEstado = (event) => { setEstado(event.target.value) }//ESTADO
    const handleMunicipio = (event) => { setMunicipio(event.target.value) }//MUNICIPIO
    const handleParroquia = (event) => { setParroquia(event.target.value) }//PARROQUIA
    const handleComunidad = (event) => { setComunidad(event.target.value) }//COMUNIDAD

    const estadosList = useSelector(state => state.estadoList)
    const municipioList = useSelector(state => state.municipioList)
    const parroquiaList = useSelector(state => state.parroquiaList)
    const comunidadList = useSelector(state => state.comunidadList)
    const sectorList = useSelector(state => state.sectorList)

    function avalibleMunicipios (){
        if(estado === '') return [{'id':'1', 'nombre_municipio':''}]// al estar vacio, devolver un objeto de muestra
        
        else {const selectedEstadoId =  estadosList.find(x => x.nombre_estado === estado).id;//sacar el id del seleccionado 
            const nonEmptyList = municipioList.filter( x => x.estado !== null); //sacar valores con estado nulo
            return nonEmptyList.filter(x => x.estado.id === selectedEstadoId) }
    }
    function avalibleParroquias (){ 
        if(municipio === '') return [{'id':'1', 'nombre_parroquia':''}] 
        else {const selectedId =  municipioList.find(x => x.nombre_municipio === municipio).id;
            const nonEmptyList = parroquiaList.filter( x => x.municipio !== null); 
            return nonEmptyList.filter(x => x.municipio.id === selectedId) }
    }
    function avalibleComunidades (){
        if(parroquia === '') return [{'id':'1', 'nombre_comunidad':''}] 
        else {const selectedId = parroquiaList.find( x => x.nombre_parroquia === parroquia).id; 
            const nonEmptyList = comunidadList.filter( x => x.parroquia !== null );
            return nonEmptyList.filter(x => x.parroquia.id === selectedId)
        }
    }
    function avalibleSectores (){ 
        if(comunidad === '') return  [{'id':'1', 'nombre_sector':''}] 
        else{ const selectedId = comunidadList.find(x => x.nombre_comunidad === comunidad).id;
            const nonEmptyList = sectorList.filter(x => x.comunidad !== null );
            return nonEmptyList.filter(x => x.comunidad.id === selectedId)
        }
    }

    const [welcome, setWelcome] = useState(true)//para hacer acciones solamente al cargar la pagina :)
    if(welcome && props.toggleUpdate){//esseto trigerea al abrir la modal de edicion
        setWelcome(false)
        setUpdateValues(props.target)
    }
    function clearInputs(){
        dispatch(setNombre('')); dispatch(setApellido('')); dispatch(setIdentificacion('')); dispatch(setSexo('')); 
        dispatch(setFecha_de_nacimiento('2000-01-01'));
        dispatch(setTelefono('')); dispatch(setTelefono_emergencia('')); dispatch(setDireccion('')); dispatch(setTipo_sangre(''));
        dispatch(setId('newUser'));
        dispatch(setSector('')); setEstado(''); setMunicipio(''); setParroquia(''); setComunidad('');
    }
    function createDataObject (){//extends
        return {
            "nombre": nombre,
            "apellido": apellido,
            "identificacion": identificacion,
            "fecha_de_nacimiento": fecha_de_nacimiento,
            "direccion": direccion,
            "tipo_sangre": tipo_sangre,
            "sexo": sexo,
            "telefono": telefono,
            "telefono_emergencia": telefono_emergencia,
            "sector": sectorList.find(x => x.nombre_sector === sector).id, //esto me trae el id del sector
        }
    }
    function postPerson(object){//extends
        
        const check = Object.values(object).map((e) => {//validacion de campos vacios
            if(e === undefined || e === ''){return false}
            else{return true} })

        if(check.includes(true)){//si alguno de los campos contienen datos:

            axios.post('http://localhost:300/person', object)
        .then((response) =>{
            alert('usuario creado con exito');
            clearInputs()
        })
        .catch((response) => {
            alert('ocurrio un error, recargue la paguina :(')
        })
        }
        
    }
    function setUpdateValues(obj){//extends
        //dispatch(setSector(obj.sector)); no se hacer esto :,v
        dispatch(setId(obj.id));
        dispatch(setNombre(obj.nombre)); dispatch(setApellido(obj.apellido)); dispatch(setIdentificacion(obj.identificacion));
        dispatch(setSexo(obj.sexo)); dispatch(setFecha_de_nacimiento(obj.fecha_de_nacimiento)); dispatch(setTelefono(obj.telefono));
        dispatch(setTelefono_emergencia(obj.telefono_emergencia));dispatch(setTipo_sangre(obj.tipo_sangre));dispatch(setDireccion(obj.direccion));
    }
    function updatePerson(object, id){//extends

        axios.put('http://localhost:300/person/' + id, object)
        .then((response) =>{
            clearInputs()   
            document.getElementById('normalize').click()
            alert('Usuario Actualizado con exito');
        })
        .catch((response) => {
            alert('ocurrio un error, recargue la paguina :(')
        })
    } 
    function RenderedButton() {//Renderizado Dinamico - estos son los botones del final de UserData

        if(props.togglePost){//boton que post
        return<><div className='centrate '>
        <Button variant="contained" style={{ "margin": "2%" }} onClick={() => {
            postPerson(createDataObject())
        }}>Crear Usuario</Button>
        </div></>
        }

        else if(props.toggleUpdate){
            return <><div className='centrate '>
            <Button variant="contained" style={{ "margin": "2%" }} onClick={() => {
                updatePerson(createDataObject(), props.target.id)
            }}>Actualizar</Button>
        </div></>}

        else if (props.postMedic){
            return <Box className='centrate'>
                <Button variant = 'contained' style={{ "margin": "2%" }} onClick = {() =>{
                dispatch(setMedicData(createDataObject()))
                }}>Agregar Medico</Button>
            </Box>
        }

        else if (props.postAux){
            return <Box className='centrate'>
                <Button variant = 'contained' style={{ "margin": "2%" }} onClick = {() =>{
                dispatch(setAuxData(createDataObject()))
                }}>Agregar Personal Auxiliar</Button>
            </Box>
        }
        
        else{//boton que guarda en state
        return<>
            {/* <Button sx={{"marginRight":"10px"}} onClick={() => {
            const allData = createDataObject()
            dispatch(addUserData(allData))//añadir datos al state
            dispatch(toggleUserData(false))//cerrar modulo de ingresar datos
        }}>Listo<CheckIcon/></Button> */}

        <Button sx={{"marginRight":"10px"}} onClick={() => {
            dispatch(toggleUserData(false))
            dispatch(togglefilterUser(true))
        }}>Buscar Usuarios <SearchIcon /></Button>
        </>
        }
    }
    function getPersonByDni (){
        axios.post('http://localhost:300/buscarPersonasPorCedula', {"identificacion": identificacion})
        .then(response => {
            setUpdateValues(response.data[0])
        })
        .catch(e => {
            console.log('no existe esa cedula en la base de datos')
        })
        .finally(() => {console.log('se termino la busqueda!')})
        
    }
    const sm = { width: '25%', maxWidth: '25%', padding:'5px' }
    const full = { width: '100%', display:'flex', padding: '0px' }

    return<>
        <Separador label = 'Datos Personales del Paciente' />
            
            <Grid container sx={{"padding":"2%"}} spacing={1} className='fadeIn'>
                <Grid item xs={12} >{/*esto es un row basicamente*/}
                    <TextField sx={sm} label="Cedula" variant="filled" type= {'number'} value={identificacion} onChange = {handleDni} onBlur={() => { getPersonByDni() }}  />
                    <TextField sx={sm} label="Nombre" variant="filled" onChange = {handleName} value = {nombre} />
                    <TextField sx={sm} label="Apellido" variant="filled" value = {apellido} onChange = {handleLastName}  />

                    <FormControl sx = {sm} >
                        <InputLabel>Genero</InputLabel>
                        <Select label="Genero" variant="filled" value = {sexo} onChange={handleGender}>
                            <MenuItem value={'masculino'}>Masculino</MenuItem>
                            <MenuItem value={'femenino'}>Femenino</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>  
                

                <Grid item xs = {12}>
                    <TextField label="Telefono" sx={sm} variant="filled" type={'number'} value = {telefono}  onChange={handleCellphone}  />
                    <TextField label="Telefono de Emergencia" sx={sm} variant="filled" type={'number'} value = {telefono_emergencia} onChange={handleEmergency} />
                    <TextField label="Fecha de Nacimiento" type="date" sx={sm} value={fecha_de_nacimiento} InputLabelProps={{shrink: true}} variant="filled" onChange={handleBirthdate} />
                    <FormControl sx = {sm}>
                        <InputLabel>Tipo de Sangre</InputLabel>
                        <Select label="Tipo de Sangre" variant="filled" id="BloodType" value={tipo_sangre} onChange={handleBloodType}>
                            {bloodList.map((e) => <MenuItem key={e+'blood'} value={e}>{e}</MenuItem>)}
                        </Select>
                    </FormControl>   
                </Grid>
                
                                                            <Separador label='Localidad del Paciente' />

                                                            
                <Grid item xs = {4}>{/* Direccion */}<Box sx={full}>
                    <FormControl sx={full}> <InputLabel>Estado</InputLabel>
                        <Select variant="filled" label="estado" value={estado} onChange={handleEstado}>
                            {estadosList.map((e) => <MenuItem value={e.nombre_estado} key={e.id +' Municipio'}>{e.nombre_estado}</MenuItem> )}
                        </Select>
                    </FormControl>  
                </Box></Grid>

                <Grid item xs = {4}>{/* Direccion */}<Box sx={full}>
                    <FormControl sx={full}> <InputLabel>Municipio</InputLabel>
                        <Select variant="filled" label="municipio" value={municipio} onChange={handleMunicipio}>
                            {avalibleMunicipios().map((e) => <MenuItem value={e.nombre_municipio} key={e.id +' Municipio'}>{e.nombre_municipio}</MenuItem> )}
                        </Select>
                    </FormControl>  
                </Box></Grid>

                <Grid item xs={4}><Box sx={full}>
                    <FormControl sx={full}> <InputLabel>Parroquia</InputLabel>
                        <Select variant="filled" label="parroquia" value={parroquia} onChange={handleParroquia}>
                            {avalibleParroquias().map((e) => <MenuItem value={e.nombre_parroquia} key={e.id + 'parroquia'}>{e.nombre_parroquia}</MenuItem> )}
                        </Select>
                    </FormControl>  
                    
                </Box></Grid>

                <Grid item xs = {6}><Box sx={full}>
                    <FormControl sx = {full} > <InputLabel>Comunidad</InputLabel>
                        <Select variant="filled" id="BloodType" label="Genero" value={comunidad} onChange={handleComunidad}>
                            {avalibleComunidades().map((e) => <MenuItem value={e.nombre_comunidad} key={e.id+' comunidad'}>{e.nombre_comunidad}</MenuItem> )}
                        </Select>
                    </FormControl> 
                </Box></Grid>

                <Grid item xs = {6}><Box sx={full}>
                    <FormControl sx={full}> <InputLabel>Sector</InputLabel>
                        <Select variant="filled" label="Genero" 
                        value={sector} onChange={handleSector} >
                            {avalibleSectores().map((e) => <MenuItem value={e.nombre_sector} key={e.id + ' sector'}>{e.nombre_sector}</MenuItem> )}
                        </Select>
                    </FormControl>  
                </Box></Grid>

            </Grid>
            
            <Grid item xs={12}>
                <div className="centrate">
                    <TextareaAutosize className="centrate" aria-label="minimum height" minRows={2} placeholder="Direccion de la Habitacion" style={{ width: "90%" }}
                    value={direccion} onChange={handleDirection}/>
                </div>
            </Grid>

            <Box className='centrate'><ButtonGroup disableElevation className='centrate' variant="contained" aria-label="Disabled buttons" 
                sx={{'padding':'10px', 'margin':'10px','alignItems':'center'}}>
                <RenderedButton /> <Button onClick={() => {clearInputs()}} color="error" >Limpiar Datos <DeleteIcon /></Button>
                {/* <Button onClick={() => {console.log(identificacion.length)}} >Ver sector</Button> */}
            </ButtonGroup></Box>
        </>
    }