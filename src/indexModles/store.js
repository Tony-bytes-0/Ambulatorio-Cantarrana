import { configureStore } from '@reduxjs/toolkit'
import menuController from './features/menuController';
//Controladores de Sintomas
import activeSymptoms from './features/Symptoms/ActiveSymptoms'; import symptomList from './features/Symptoms/symptomList'
import diseases from './features/Symptoms/diseases'; import activeDiseases from './features/Symptoms/activeDiseases'
//Pre historia medica
import size from './features/preMedicalRecord/size'; 
import temp from './features/preMedicalRecord/temp'
import weight from './features/preMedicalRecord/weight';
import observations from './features/preMedicalRecord/obsevations'
import medicalRecordDate from './features/preMedicalRecord/MedicalRecordDate'
import diastolic from './features/preMedicalRecord/diastolic'; import sistolic from './features/preMedicalRecord/sistolic'
import recipe from './features/preMedicalRecord/recipe';
import indications from './features/preMedicalRecord/indications';
//Controladores de Examenes
import activeEmatology from './features/ematology/activeEmatology'
import ematologyList from './features/ematology/ematologyList'
import activeCoprouro from './features/coprouro/activeCoprouro'
import coprouro from './features/coprouro/coprouro'
import activeRadiography from './features/radiography/activeRadiography'
import radiographyList from './features/radiography/radiographyList'
//Alergias
import allergieList from './features/allergies/allergieList'
import activeAllergies from './features/allergies/activeAllergies'
//controlador del estado Register
import registerController from  './features/registerController/registerController'//renderizados en la historia medica (filtrar, añadir) usuarios

//Datos del usuario - entidad person
import id from './features/userData/person/id'
import userData from './features/userData/userData' 
import nombre from './features/userData/person/nombre';
import apellido from './features/userData/person/apellido';
import identificacion from './features/userData/person/identificacion';
import sexo from './features/userData/person/sexo';
import direccion from './features/userData/person/direccion';
import tipo_sangre from './features/userData/person/tipo_sangre';
import telefono from './features/userData/person/telefono';
import telefono_emergencia from './features/userData/person/telefono_emergencia';
import fecha_de_nacimiento from './features/userData/person/fecha_de_nacimiento';
import sector from './features/userData/person/sector';





import sectorList from './features/registerController/sectorList';
import comunidadList from './features/registerController/comunidadList';
import parroquiaList from './features/registerController/parroquiaList';
import municipioList from './features/registerController/municipioList';
import estadoList from './features/registerController/estadoList';
import medicalRecord from './features/medicalRecord'
import medic from './features/userData/medic';
import auxiliar from './features/userData/auxiliar';
import especialityList from './features/userTypeData/especialityList';

import userList from './features/userData/userList' //lista Datos retornados por Get a person los usa el modulo: "ShowAllUsers"
//Localidades

//usuarios estaticos locales, para probar el login
import localUsers from './features/users/testUsers'
import loginController from './features/users/loginController'

export default configureStore({
  reducer: {
    id, nombre, apellido, identificacion, fecha_de_nacimiento, sexo, direccion, sector, telefono, telefono_emergencia, tipo_sangre,
    userData, medicalRecord, 
    sectorList, comunidadList, parroquiaList, municipioList, estadoList,//Locations
    activeSymptoms, symptomList, diseases, activeDiseases,
    //Pre historia
    size, weight, temp, diastolic, sistolic,
    medicalRecordDate, observations, recipe, indications,
    
    userList, especialityList, medic, auxiliar,

    registerController, 

    allergieList, activeAllergies,
    activeEmatology, ematologyList,
    activeCoprouro, coprouro,
    activeRadiography, radiographyList,
    //login
    localUsers,
    menuController, loginController,
  }
})