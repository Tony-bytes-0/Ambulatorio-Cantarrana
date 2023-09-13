//MUI
import { Button } from "@mui/material"

//Redux
import { useDispatch, useSelector } from "react-redux"
//import { clearData } from "../../indexModles/features/userData/userData"

//modulos
import FilterUsers from "./testRegisterModules/FilterUsers"
import UserData from "./testRegisterModules/UserData"
import MedicalRecord from "./testRegisterModules/MedicalRecord"
// import SelectedUser from './Independientes/SelectedUser'
import { togglefilterUser, toggleUserData } from "../../indexModles/features/registerController/registerController"
import PostBtn from "./testRegisterModules/PostBtn"

export function Register (props){
    const registerState = useSelector(state => state.registerController)
    //aca estaran toooodos los states

    
    const dispatch = useDispatch()

    if(registerState.filterUserActive){
        return<>
            <FilterUsers />{/* Busqueda de usuarios */}
            <MedicalRecord /> <PostBtn />
        </>
    }

    else if(registerState.userDataActive) {return <>
        <UserData />{/* Ingresar los Datos del usuario*/}
        <MedicalRecord /> <PostBtn />
    </>}
    else{return<>
        {/* <SelectedUser /> */}
        <UserData />
        <div className="centrate horizontalFlex">
            <Button variant="contained" onClick={() => {dispatch(togglefilterUser(true))}}>Buscar Otro Usuario</Button>
            <Button variant="contained" onClick={() => {dispatch(toggleUserData(true))}}>Volver a Llenar Datos</Button>
        </div>

        <MedicalRecord />
        <PostBtn />
    </>}
    
}

//             <Select label={"Genero"} sx={smallWidth}>
//                 <MenuItem >Masculino</MenuItem>
//                 <MenuItem >Femenino</MenuItem>
//             </Select>

// <TextField sx={smallWidth} label="Cedula" variant="outlined" />
// <TextField sx={smallWidth} label="Nombre" variant="outlined" spacing={20}/>
// <TextField sx={smallWidth} label="Apellido" variant="outlined" spacing={20}/>

// <Select label="Tipo de Sangre" sx={smallWidth}>