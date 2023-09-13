//React
import { useState } from 'react'

//MUI Components
import { Grid, TextField, InputLabel, Select, MenuItem, FormControl, Button, TextareaAutosize, ButtonGroup, Box  } from "@mui/material"

//Redux
import { useDispatch, useSelector } from 'react-redux'

//Axios
import axios from "axios"

//Modulos
import Separador from '../Independientes/Separador'
import { bloodList, municipioList, parroquiaList } from '../Independientes/staticValuesList'
// import UserType from './UserType'
import { setSectorList } from '../../../indexModles/features/registerController/sectorList'
//Iconos
import DeleteIcon from '@mui/icons-material/Delete';



export default function RegisterMedic(props){//MAIN
    const dispatch = useDispatch() //DEV
    //Estado de variables de datos
    const [dni, setDni] = useState(''); const handleDni = (event) => {
        const validateNumber="[0-9]";
        if(event.target.value.match(validateNumber) != null){ setDni(event.target.value) }
    }//DNI
    const [cellphone, setCellphone] = useState(''); const handleCellphone = (event) => { 
        const validateNumber="[0-9]";
        if(event.target.value.match(validateNumber) != null){ setCellphone(event.target.value) }
    }//CELLPHONE

    const [emergency, setEmergency] = useState(''); const handleEmergency = (event) => { 
        const validateNumber="[0-9]";
        if(event.target.value.match(validateNumber) != null){ setEmergency(event.target.value) }
    }//EMERGENCY

    const [name, setName] = useState(''); const handleName = (event) => { setName(event.target.value)}//NAME
    const [lastName, setLastName] = useState(''); const handleLastName = (event) => {setLastName(event.target.value)}//LASTNAME   
    const [gender, setGender] = useState(''); const handleGender = (event) => { setGender(event.target.value) }//GENDER   
    const [birthdate, setBirthdate] = useState(''); const handleBirthdate = (event) => {setBirthdate(event.target.value)}//BIRTHDATE
    const [bloodType, setBloodType] = useState(''); const handleBloodType = (event) => { setBloodType(event.target.value) }//BLOODTYPE
    const [municipio, setMunicipio] = useState(''); const handleMunicipio = (event) => { setMunicipio(event.target.value) }//MUNICIPIO
    const [parroquia, setParroquia] = useState(''); const handleParroquia = (event) => { setParroquia(event.target.value) }//PARROQUIA
    const [sector, setSector] = useState(''); const handleSector = (event) => { setSector(event.target.value) }//SECTOR
    const [comunidad, setComunidad] = useState(''); const handleComunidad = (event) => { setComunidad(event.target.value) }//COMUNIDAD
    const [direction, setDirection] = useState(''); const handleDirection = (event) => { setDirection(event.target.value) }//LOCALIDAD
    const especialityList = useSelector(state => state.especialityList.medic)
    const [especiality,setEspeciality] = useState(''); const handleEspeciality = (event) => {setEspeciality(event.target.value) }//especialidad


    useState( () => {
        fetchSector()
    }, [])

    const comunidadList = useSelector(state => state.comunidadList)
    const sectorList = useSelector(state => state.sectorList)//Selector de Sector

    function fetchSector (){
        axios.get('http://localhost:300/sector')
        .then(response => {
            dispatch(setSectorList(response.data))
        }).catch(response => {
            //alert(' ocurrio un error al buscar el sector en la base de datos ' )
            console.log(response)
        })
    }
    const [welcome, setWelcome] = useState(true)//para hacer acciones solamente al cargar la pagina :)
    if(welcome && props.toggleUpdate){//esseto trigerea al abrir la modal de edicion
        setWelcome(false)
    }
    function clearInputs(){
        setName('');setDni('');setLastName('');setGender('');setCellphone('');setEmergency('');setEspeciality('');
        setBloodType('');setMunicipio('');setParroquia('');setSector('');setBirthdate('2000-01-01');setDirection('');
    }
    function createDataObject (){//extends
        return {
            "nombre": name,
            "apellido": lastName,
            "identificacion": dni,
            "fecha_de_nacimiento": birthdate,
            "direccion": direction,
            "tipo_sangre": bloodType,
            "sexo": gender,
            "telefono": cellphone,
            "telefono_emergencia": emergency,
            "sector": sector,
            "especialidad": especiality,
            // "parroquia":parroquia,
        }
    }

    const sm = { width: '25%', maxWidth: '25%', padding:'5px' }

    return<>
        <Separador label = 'Ingresar Nuevo Medico' />
            
            <Grid container sx={{"padding":"2%"}} spacing={1} className='fadeIn'>
                <Grid item xs={12} >{/*esto es un row basicamente*/}
                    <TextField sx={sm} label="Cedula" variant="filled" type= {'number'} value={dni} onChange = {handleDni}   />
                    <TextField sx={sm} label="Nombre" variant="filled" value = {name} onChange = {handleName} />
                    <TextField sx={sm} label="Apellido" variant="filled" value = {lastName} onChange = {handleLastName}  />

                    <FormControl sx = {sm} >
                        <InputLabel>Genero</InputLabel>
                        <Select label="Genero" variant="filled" value = {gender} onChange={handleGender}>
                            <MenuItem value={'masculino'}>Masculino</MenuItem>
                            <MenuItem value={'femenino'}>Femenino</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>  
                

                <Grid item xs = {12}>
                    <TextField label="Telefono" sx={sm} variant="filled" type={'number'} value = {cellphone}  onChange={handleCellphone}  />
                    <TextField label="Telefono de Emergencia" sx={sm} variant="filled" type={'number'} value = {emergency} onChange={handleEmergency} />
                    <TextField label="Fecha de Nacimiento" type="date" sx={sm} value={birthdate} InputLabelProps={{shrink: true}} variant="filled" onChange={handleBirthdate} />
                    <FormControl sx = {sm}>
                        <InputLabel>Tipo de Sangre</InputLabel>
                        <Select label="Tipo de Sangre" variant="filled" id="BloodType" value={bloodType} onChange={handleBloodType}>
                            {bloodList.map((e) => <MenuItem key={e+'blood'} value={e}>{e}</MenuItem>)}
                        </Select>
                    </FormControl>   
                </Grid>
                
                <Separador label='Direccion' />

                <Grid item xs = {3}>{/* Direccion */}
                    <FormControl fullWidth>
                        <InputLabel>Municipio</InputLabel>
                        <Select variant="filled" id="BloodType" label="Genero" value={municipio} onChange={handleMunicipio}>
                            {municipioList.map((e) => <MenuItem value={e} key={e+'mun'}>{e}</MenuItem> )}
                        </Select>
                    </FormControl>  
                </Grid>

                <Grid item xs = {3}>
                    <FormControl fullWidth>
                        <InputLabel>parroquia</InputLabel>
                        <Select variant="filled" id="BloodType" label="Genero" value={parroquia} onChange={handleParroquia}>
                            {parroquiaList.map((e) => <MenuItem value={e} key={e+'parr'}>{e}</MenuItem> )}
                        </Select>
                    </FormControl>  
                </Grid>

                <Grid item xs = {3}>
                    <FormControl fullWidth >
                        <InputLabel>Comunidad</InputLabel>
                        <Select variant="filled" id="BloodType" label="Genero" value={comunidad} onChange={handleComunidad}>
                            {comunidadList.map((e) => <MenuItem value={e} key={e+'sec'}>{e}</MenuItem> )}
                        </Select>
                    </FormControl>  
                </Grid>

                <Grid item xs = {3}>
                    <FormControl fullWidth >
                        <InputLabel>Sector</InputLabel>
                        <Select variant="filled" id="BloodType" label="Genero" 
                        value={sector} onChange={handleSector} >
                            {sectorList.map((e) => <MenuItem value={e.id} key={e.id}>{e.nombre_sector}</MenuItem> )}
                        </Select>
                    </FormControl>  
                </Grid>

            
            </Grid>
            
            <Grid item xs={12}>
                <div className="centrate">
                    <TextareaAutosize className="centrate" aria-label="minimum height" minRows={2} placeholder="Direccion de la Habitacion" style={{ width: "90%" }}
                    value={direction} onChange={handleDirection}/>
                </div>
            </Grid>

            <Box className='centrate'><FormControl sx = {sm} >
                <InputLabel>Especialidad del Medico</InputLabel>
                <Select label="Genero" variant="filled" value={especiality} onChange={handleEspeciality}>
                    {especialityList.map((e) => <MenuItem key={e} value={e} > {e} </MenuItem> )}
                </Select>
            </FormControl></ Box>

            <Box className='centrate'><ButtonGroup disableElevation className='centrate' variant="contained" aria-label="Disabled buttons" 
                sx={{'padding':'10px', 'margin':'10px','alignItems':'center'}}>

                <Button onClick={clearInputs} color="error" >Limpiar Datos <DeleteIcon /></Button>  
                <Button variant = 'contained' style={{ "margin": "2%" }} onClick = {() =>{ console.log('datos del medico: ', createDataObject())}}>Agregar Medico</Button>

            </ButtonGroup></Box>
        

        </>
    }