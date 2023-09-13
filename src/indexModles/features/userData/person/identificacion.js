import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const identificacion = createSlice({
  name: 'identificacion',
  initialState:initialRadiography,
  reducers: {
    
    setIdentificacion: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setIdentificacion } = identificacion.actions
export default identificacion.reducer