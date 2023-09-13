//React
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
//MUI
import { AppBar, IconButton, Toolbar, Typography, Grid } from "@mui/material"
import {Button, Modal} from "@mui/material";
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { disconect } from "../../indexModles/features/users/loginController";
import { Box } from "@mui/system";

import MenuIcon from '@mui/icons-material/Menu';
// import logoAmbulatorio from  './Independientes/logoAmbulatorio.jfif'
import cintilloSalud from './Independientes/salud cintillo.png'
import aniversarioSucre from './Independientes/200 nepes.png'

import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { openMenu } from "../../indexModles/features/menuController";

function LoggedData() {
    const [modal] = useState(true); 
    const closeModal = () => {navigate('/')};
    const navigate = useNavigate();

    //const menu = useSelector(state => state.menu)

    const loggedUser = useSelector(state => state.loginController)

    if(loggedUser.usuario !== false) return <Typography sx={{"color":"black"}} >Usuario: {loggedUser.usuario}</Typography>

    else return <> {/* Logeadon't */}
        <Modal open={modal} onClose={closeModal} disableScrollLock={false} ><div className='modalColor modalCentratedSmall verticalFlex centrate'>
            Para Continuar, es Necesario Ingresar un Usuario
            <Button variant='contained' onClick={() => navigate('/')} >Iniciar Sesion</Button>
        </div></Modal>
    </>
}

export default function StatusBar(){//Main
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    
    function MenuIconBtn (){//este es el boton hamburguesa
        const menu = useSelector(state => state.menuController)
        if(menu.display === 'none'){
            return <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2, marginRight:"15%" }} onClick={() => { dispatch(openMenu()) }}>
                <MenuIcon />
            </IconButton>
        } else{ return <></>} }
    
        const allSpace = {width: "100%", display:'flex'}
        
    return <Box sx={{ flexGrow: 1 }} position="sticky" >
        <AppBar position="static" sx={{backgroundColor:'white'}}>
            <Toolbar > 
                <Grid container>
                    <Grid item xs = {12}>
                        <Box className='horizontalFlex'>
                            <Box sx={{width:'5%'}}><MenuIconBtn /></Box>
                            <Box sx={{width:'30%'}}> <img alt='cintilloSalud' src={cintilloSalud} style={allSpace} /></Box>
                        <Box sx = {{display: 'flex', width:'60%', justifyContent:'right'}} className='horizontalFlex centrate'>
                            <LoggedData />
                            <IconButton sx={{ width:"10%",paddingLeft:"10px" }} onClick={() => {dispatch(disconect()); navigate('/')}} >
                                <PowerSettingsNewIcon style={{color: 'red'}} />
                            </IconButton>
                            <Box sx={{justifyContent:'right',alignItems:'right'}}  >
                                <img alt='aniversarioSucre' src={aniversarioSucre} style={{ "width": "30%","height":"40%", "display":"flex","margin":"auto"}} />
                            </Box>
                        </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </Box>

}

