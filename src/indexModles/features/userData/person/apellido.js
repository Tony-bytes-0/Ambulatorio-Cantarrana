import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const apellido = createSlice({
  name: 'apellido',
  initialState:initialRadiography,
  reducers: {
    
    setApellido: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setApellido } = apellido.actions
export default apellido.reducer