import { createSlice } from '@reduxjs/toolkit'

const init = {
  "nombre": "", "apellido": "", "identificacion": "",
  "fecha_de_nacimiento":"" , "direccion":"" , "tipo_sangre":"Desconocido" ,
  "sexo": "", "telefono":"" ,"telefono_emergencia":"" ,
  "sector":""
}

export const userData = createSlice({
  name: 'userData',
  initialState:init,
  reducers: {
    
    addUserData: (state, action) => {
      return state = action.payload
    },

    clearData:(state, action) => {
      return {"nombre": "", "apellido": "", "identificacion": "",
      "fecha_de_nacimiento":"" , "direccion":"" , "tipo_sangre":"" ,
      "sexo": "", "telefono":"" ,"telefono_emergencia":"" ,
      "sector":"",}
    }



  }
})

export const { addUserData, clearData } = userData.actions
export default userData.reducer