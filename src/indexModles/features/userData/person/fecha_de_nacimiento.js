import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const fecha_de_nacimiento = createSlice({
  name: 'fechaNacimiento',
  initialState:initialRadiography,
  reducers: {
    
    setFecha_de_nacimiento: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setFecha_de_nacimiento } = fecha_de_nacimiento.actions
export default fecha_de_nacimiento.reducer