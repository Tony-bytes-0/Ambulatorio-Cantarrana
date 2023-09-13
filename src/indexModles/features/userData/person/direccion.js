import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const direccion = createSlice({
  name: 'direccion',
  initialState:initialRadiography,
  reducers: {
    
    setDireccion: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setDireccion } = direccion.actions
export default direccion.reducer