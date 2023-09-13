//React
import {useNavigate} from 'react-router-dom';
//MUI
import Button from '@mui/material/Button';
import { Paper, MenuList, MenuItem, ListItemIcon, Typography } from '@mui/material';
import { useState } from 'react';
import { Box } from '@mui/system';
    //iconos
// import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded'; 
import CloseIcon from '@mui/icons-material/Close'; import FilterIcon from '@mui/icons-material/Filter';
import HealingIcon from '@mui/icons-material/Healing'; import ScienceIcon from '@mui/icons-material/Science';
import FolderSharedIcon from '@mui/icons-material/FolderShared'; import GroupsIcon from '@mui/icons-material/Groups';
import BiotechIcon from '@mui/icons-material/Biotech'; import CoronavirusIcon from '@mui/icons-material/Coronavirus';

import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../indexModles/features/menuController';


export default function SideBar() {//MAIN
    //const loggedUser = useSelector(state => state.loginController)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [register, setRegister] = useState(false)
    const [crud, setCrud] = useState(false)
    const [query, setQuery] = useState(false)

    //const basicStyles = {"padding":"15px","marginTop":"20px","display":"flex"}
    return <Paper sx={{ width: '17%', maxWidth: '100%', height: '10000px',  position: 'fixed' }} >
    <MenuList>
        <MenuItem onClick={() => {dispatch(closeMenu())}}><Box className='centrate'><CloseIcon /></Box></MenuItem>
        <Box><Button></Button> </Box>
        <MenuItem onClick={() => {setRegister(!register); setCrud(false); setQuery(false); }}>
            <Typography noWrap fontSize={'18px'}sx={{"padding":"10px"}} ><b>Registro</b> </Typography>
        </MenuItem>
        
            {register ? (<MenuList className = 'fadeIn'>
            {/* <MenuItem onClick={() => {navigate('/users')}}>
                <ListItemIcon> <PeopleRoundedIcon /> </ListItemIcon>
                <Typography noWrap fontSize={'14px'}>Personas </Typography>
            </MenuItem> */}

            <MenuItem onClick={() => {navigate('/register')}}>
                <ListItemIcon> <CreateNewFolderIcon /> </ListItemIcon>
                <Typography noWrap fontSize={'13px'}>Historia Medica </Typography>
            </MenuItem>

            {/* <MenuItem onClick={() => {navigate('/registerMedic')}}>
                <ListItemIcon> <PeopleRoundedIcon /> </ListItemIcon>
                <Typography noWrap fontSize={'13px'}>Medicos </Typography>
            </MenuItem>

            <MenuItem onClick={() => {navigate('/register')}}>
                <ListItemIcon> <PeopleRoundedIcon /> </ListItemIcon>
                <Typography noWrap fontSize={'13px'}>Personal Auxiliar </Typography>
            </MenuItem> */}

            
            </MenuList>):(<p></p>)}

        <MenuItem onClick={() => {setQuery(!query); setRegister(false); setCrud(false); }}>
            <Typography noWrap fontSize={'18px'}sx={{"padding":"10px"}} > <b>Consulta</b> </Typography>
        </MenuItem>
            
            {query ? (<MenuList className = 'fadeIn'>
            <MenuItem onClick={() => {navigate('/showAllUsers')}}>
                <ListItemIcon> <GroupsIcon /> </ListItemIcon>
                <Typography noWrap fontSize={'14px'}>Todos los Usuarios </Typography>
            </MenuItem>

            <MenuItem onClick={() => {navigate('/medicalRecords')}}>
                <ListItemIcon> <FolderSharedIcon /> </ListItemIcon>
                <Typography noWrap fontSize={'14px'}>Ver Historias Medicas</Typography>
            </MenuItem>
            </MenuList>):<p></p>}

        <MenuItem onClick={() => {setCrud(!crud); setRegister(false); setQuery(false); }}>
            <Typography noWrap fontSize={'15px'}sx={{"padding":"10px"}} > <b>Gestionar Datos</b> </Typography>
        </MenuItem>
            
            {crud ? (<MenuList className = 'fadeIn'>
            <MenuItem onClick={() => {navigate('/diseasesCrud')}}>
                <ListItemIcon> <HealingIcon /> </ListItemIcon>
                <Typography noWrap fontSize={'14px'}>Enfermedades</Typography>
            </MenuItem>

            <MenuItem onClick={() => {navigate('/AllergiesCrud')}}>
                <ListItemIcon> <CoronavirusIcon /> </ListItemIcon>
                <Typography noWrap fontSize={'14px'}>Alergias</Typography>
            </MenuItem>

            <MenuItem onClick={() => {navigate('/coprouroCrud')}}>
                <ListItemIcon> <BiotechIcon /> </ListItemIcon>
                <Typography noWrap fontSize={'14px'}>Copro/uro</Typography>
            </MenuItem>

            <MenuItem onClick={() => {navigate('/ematologyCrud')}}>
                <ListItemIcon> <ScienceIcon /> </ListItemIcon>
                <Typography noWrap fontSize={'14px'}>Hematologias</Typography>
            </MenuItem>

            <MenuItem onClick={() => {navigate('/radiographysCrud')}}>
                <ListItemIcon> <FilterIcon />  </ListItemIcon>
                <Typography noWrap fontSize={'14px'}>Radiografias</Typography>
            </MenuItem>
            </MenuList>):<p></p>}

    </MenuList>
  </Paper>
}
//         return <div className='SIDEBAR'>
//             <Box className='centrate'> 
//  < AccountCircleRoundedIcon/> <AppRegistrationRoundedIcon /> <LocalHospitalIcon />
//             </Box>
//             <ButtonGroup  
//                 disableElevation
//                 className='buttonMenuBtn'
//                 orientation="vertical"
//                 aria-label="Disabled buttons">
//                     <Box>
//                         <Button onClick={() => {navigate('/users')}}  sx = {basicStyles}> Registro de Personas </Button>
//                         <PeopleRoundedIcon sx={{"width":"300px","maxWidth":"40%", "display":"flex"}} onClick={() =>{alert('wiu wiu')}} />
//                         <PeopleRoundedIcon sx={{"width":"300px","maxWidth":"40%", "display":"flex"}} onClick={() =>{alert('wiu wiu')}} />
//                     </Box>
                    
                    

//                     <Button   onClick={() => {navigate('/register')}} 
//                         sx = {basicStyles}>
//                         Registro de Historia Medica
//                     </Button>

//                     <Button  onClick={ () => {navigate('/showAllUsers')} }
//                         sx = {basicStyles}>
//                         Ver Todos los Usuarios
//                     </Button>

//                     <Button sx = {basicStyles} onClick={ () => {navigate('/medicalRecords'); } } >Consulta de Historias Medicas </Button>


//                     <Button  sx = {basicStyles} onClick={ 
//                         handleCrud
//                     }>Gestion de Datos </Button>

//                     {crud ?(<Box className='statusBarMenu centrate'>
//                         <ButtonGroup disableElevation variant="outlined" orientation="vertical"aria-label="Disabled elevation buttons" sx={{"width":"90%"}} > 

//                             <Button onClick={ () => {navigate('/diseasesCrud'); } } > Enfermedades </Button>
//                             <Button onClick={ () => {navigate('/AllergiesCrud'); } } > Tipos de Alergias </Button>
//                             <Button onClick={ () => {navigate('/coprouroCrud'); } } > Examenes de Laboratoio </Button>
//                             <Button onClick={ () => {navigate('/ematologyCrud'); } } > Ematologias </Button>
                            


//                         </ButtonGroup>


//                     </Box>
//                     ) : (<></>)}                    
                
//             </ButtonGroup>
//        </div>
//}
