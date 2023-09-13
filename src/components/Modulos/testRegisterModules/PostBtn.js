import { useDispatch, useSelector } from "react-redux"
import store from "../../../indexModles/store"
import { Button } from "@mui/material"
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import { setSize } from "../../../indexModles/features/preMedicalRecord/size";
import { setTemp } from "../../../indexModles/features/preMedicalRecord/temp";
import { setObservations } from "../../../indexModles/features/preMedicalRecord/obsevations";
import { setWeight } from "../../../indexModles/features/preMedicalRecord/weight";
import { setSistolic } from "../../../indexModles/features/preMedicalRecord/sistolic"
import { setDiastolic } from "../../../indexModles/features/preMedicalRecord/diastolic"
import { setMedicalRecordDate } from "../../../indexModles/features/preMedicalRecord/MedicalRecordDate";
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

import { setActiveAllergies } from "../../../indexModles/features/allergies/activeAllergies"
import { setActiveDiseases } from "../../../indexModles/features/Symptoms/activeDiseases"
import { normalizeActiveSymptoms } from "../../../indexModles/features/Symptoms/ActiveSymptoms";
import { normalizeActiveEmatology } from "../../../indexModles/features/ematology/activeEmatology";
import { normalizeActiveCoprouro } from '../../../indexModles/features/coprouro/activeCoprouro';
import { normalizeActiveRadiography } from '../../../indexModles/features/radiography/activeRadiography'
import { setRecipe } from "../../../indexModles/features/preMedicalRecord/recipe";
import { setIndications } from "../../../indexModles/features/preMedicalRecord/indications";


export default function PostBtn(){
    //const navigate = useNavigate()
    const dispatch = useDispatch()
    const style = { "margin": "2%" }

    const preSymptoms = useSelector( state => state.activeSymptoms)
    const Symptoms = preSymptoms.map((e) => e.body)


    
    function createMedicalRecord() {
        const obj = { altura: store.getState().size, peso: store.getState().weight, 
            temperatura: store.getState().temp,  observaciones: store.getState().observations, 
            fecha: store.getState().medicalRecordDate,  razon_visita:"consulta", 
            tension: store.getState().sistolic + ' / ' + store.getState().diastolic, N_historia:"0", 
            sintomas: Symptoms.toString(), problems:[] }
        
        if(isNaN(obj.altura)){obj.problems.push(' Altura')}
        if(isNaN(obj.peso)){obj.problems.push(' Peso')}
        if(isNaN(store.getState().sistolic )){obj.problems.push(' Tension Sistolica')}
        if(isNaN(store.getState().diastolic)){obj.problems.push(' Tension Diastolica')}
        if(isNaN(obj.temperatura)){obj.problems.push(' Temperatura')}
        return obj
    }
    function createDataObject (){//extends
        return {
            "nombre": store.getState().nombre,
            "apellido": store.getState().apellido,
            "identificacion": store.getState().identificacion,
            "fecha_de_nacimiento": store.getState().fecha_de_nacimiento,
            "direccion": store.getState().direccion,
            "tipo_sangre": store.getState().tipo_sangre,
            "sexo": store.getState().sexo,
            "telefono": store.getState().telefono,
            "telefono_emergencia": store.getState().telefono_emergencia,
            "sector": store.getState().sectorList.find(x => x.nombre_sector === store.getState().sector).id, //esto me trae el id del sector
        }
    }
    function postPreMedicalRecord(obj){
        axios.post('http://localhost:300/phistoria', obj)
        .then((response) =>{
            console.log('la phistoria se creo correctamente', response.data)
            postMR(getMRData(response.data.id))
        })
        .catch((response) =>{
            console.log('ha ocurrido un error en la pre historia medica', response)
        })
    }
    function postMR(obj){
        axios.post('http://localhost:300/historiam', obj)
        .then((response) => {
            alert('creacion exitosa');
            normalize();
        })
        .catch((response) =>{
            console.log('ha ocurrido un error al crear la historia medica', response)
        })
    }
    function getMRData(phistoriaId){
        const coprouro = store.getState().activeCoprouro.map((e) => e.nombre)
        const ematologys = store.getState().activeEmatology.map((e) => e.nombre)
        const radiographys = store.getState().activeRadiography.map((e) => e.body)

        console.log(radiographys)
        return {"recipe":store.getState().recipe, "indicaciones": store.getState().indications,
        "phistoria":phistoriaId, 
        "coprouro": coprouro.toString(),
        "analisis":ematologys.toString(),
        "img":radiographys.toString()
    }
    }
    function postPersondThenMedicalRecord(object){//extends
        const check = Object.values(object).map((e) => {
        if(e === undefined || e === ''){return false} else{return true} })//validacion de campos vacios
        if(check.includes(true)){//si alguno de los campos contienen datos:
            console.log(object)
            axios.post('http://localhost:300/person', object)
            .then((response) =>{
                const newUser = response.data; 
                postPreMedicalRecord({...createMedicalRecord(), person: newUser.id});
                console.log('al crear usuario e historia, estos son los datos enviados: ', {...createMedicalRecord(), person: newUser.id})
            })
            .catch((response) => {
                alert('ocurrio un error con el registro de los datos del paciente')
            })
            }
    }
    function normalize(){
        dispatch(setSize('')); dispatch(setTemp('')); dispatch(setDiastolic('')); dispatch(setSistolic(''));
        dispatch(setObservations('')); dispatch(setWeight('')); dispatch(setMedicalRecordDate('1999-01-01')); 

        dispatch(setNombre('')); dispatch(setApellido('')); dispatch(setIdentificacion('')); dispatch(setSexo('')); dispatch(setFecha_de_nacimiento('2000-01-01'));
        dispatch(setTelefono('')); dispatch(setTelefono_emergencia('')); dispatch(setDireccion('')); dispatch(setSector('')); dispatch(setTipo_sangre(''));
        dispatch(setId('newUser'));
        dispatch(setActiveAllergies());dispatch(setActiveDiseases()); dispatch(normalizeActiveSymptoms());
        dispatch(normalizeActiveRadiography()); dispatch(normalizeActiveEmatology()); dispatch(normalizeActiveCoprouro());
        dispatch(setRecipe('')); dispatch(setIndications(''))
    }


    return <div className="centrate"> 
       
        {/* <Button onClick={() => {console.log(createMedicalRecord())}}>dime que hay en el objeto de medical record</Button> */}
        <Button variant="contained" style={style} onClick={() => {
            var attempt = createMedicalRecord()
            if(store.getState().id !== 'newUser'){//usuario ya existente seleccionado
                if(attempt.problems.length < 1){
                    postPreMedicalRecord({...createMedicalRecord(), person: store.getState().id })
                    console.log('este es el objeto enviado: ', {...createMedicalRecord(), person: store.getState().id })
                }
                else{
                    alert('error, en los siguientes campos no hay numeros: ' + attempt.problems)
                }
            }//usuario nuevo

            else{ postPersondThenMedicalRecord( createDataObject() )  }


        }}> Registar Historia Medica </Button>   


    </div>
}