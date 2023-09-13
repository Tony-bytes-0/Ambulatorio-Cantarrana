import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const telefono = createSlice({
  name: 'telefono',
  initialState:initialRadiography,
  reducers: {
    
    setTelefono: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setTelefono } = telefono.actions
export default telefono.reducer