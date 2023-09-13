import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const tipo_sangre = createSlice({
  name: 'tipo_sangre',
  initialState:initialRadiography,
  reducers: {
    
    setTipo_sangre: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setTipo_sangre } = tipo_sangre.actions
export default tipo_sangre.reducer