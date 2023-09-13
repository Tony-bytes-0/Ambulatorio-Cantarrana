//modulos
import { Register } from './Modulos/Register';
import RegisterMedic from './Modulos/cruds/RegisterMedic';
import SideBar from './Modulos/SideBar';
import UserData from './Modulos/testRegisterModules/UserData';
import ShowAllUsers from  './Modulos/ShowAllUsers';
import AllergiesCrud from './Modulos/cruds/AllergiesCrud';
import LoginScreen from './Modulos/LoginScreen';
import MedicalRecord from './Modulos/cruds/MedicalRecord';
//CRUDS
import CoprouroCrud from './Modulos/cruds/CoprouroCrud';
import EmatologyCrud from './Modulos/cruds/EmatologyCrud';
import DiseasesCrud from './Modulos/cruds/DiseasesCrud';
import RadiographysCrud from './Modulos/cruds/RadiographyCrud';
//React-Router
import {BrowserRouter, Route, Routes} from 'react-router-dom'

//MUI Components
import { Grid } from '@mui/material';
//Modules
import StatusBar from './Modulos/StatusBar';
import { useSelector } from 'react-redux';



function MainFrame(props){
    const menu = useSelector(state => state.menuController)
    return <Grid container>
        <Grid item xs={menu.sideBarSize} display={menu.display} className='fadeIn'> <SideBar /> </Grid>
        <Grid item xs = {menu.mainframeSize}>
            <Grid item xs = {12} > <StatusBar/> </Grid>
            <Grid item xs={12}> {props.element} </Grid>  
        </Grid>
    </Grid>
}

export default function Application(){
    
    return<>
        <BrowserRouter>
            <Routes>

                <Route path='/' element ={<> <Grid container> <Grid item xs={12}> <LoginScreen/> </Grid> </Grid></> } />

                <Route path='/register' element = { <MainFrame element = {<Register/>} /> } />

                <Route path='/registerMedic' element = { <MainFrame element = {<RegisterMedic />} /> } />

                <Route path='/medicalRecords' element = {<MainFrame element = {<MedicalRecord />} />} />

                <Route path='/users' element = {<MainFrame element = {<UserData togglePost = {true} />} />} />
                
                <Route path='/showAllUsers' element = {<MainFrame element = {<ShowAllUsers  />} />} />

                <Route path='/AllergiesCrud' element = {<MainFrame element = {<AllergiesCrud  />} />} />
                
                <Route path='/CoprouroCrud' element = {<MainFrame element = {<CoprouroCrud  />} />} />

                <Route path='/ematologyCrud' element = {<MainFrame element = {<EmatologyCrud  />} />} />

                <Route path='/diseasesCrud' element = {<MainFrame element = {<DiseasesCrud  />} />} />

                <Route path='/radiographysCrud' element = {<MainFrame element = {<RadiographysCrud  />} />} />
                
                
            </Routes>
        </BrowserRouter>
    </>
}

//esto era lo viejo, en forma de clase
// export default class App extends Component{state = {active:"Registro"};//active es accesible desde onClickFunction
    
//     render(){
//         let activeContent = 'componente por defecto :)';/*componente a renderizar depende de this.state.active*/
        
//         if(this.state.active === "Registro")activeContent = <Register renderMedicalRecord={true} />
//         else if(this.state.active === "Consulta")activeContent = <Query />
        
//         return<>
//         <div className='verticalFlex'>
//             <h1>INFORMACION DE REDUX</h1>
//             <div>
//                 sexoooote
//             </div>
//         </div>
        
//             <SideBar options={['Registro', 'Consulta']} 
//                 onClickFunction={async(param) => {/*cambiar this.state.active de <App>*/
//                     await this.setState({active:param});
//                 } 
//             }/>
//             {activeContent}{/* contenido principal, depende de this.state.active de <App> */}     
//     </>}
// }