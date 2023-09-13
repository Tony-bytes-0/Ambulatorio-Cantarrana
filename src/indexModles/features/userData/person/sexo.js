import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const sexo = createSlice({
  name: 'sexo',
  initialState:initialRadiography,
  reducers: {
    
    setSexo: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setSexo } = sexo.actions
export default sexo.reducer