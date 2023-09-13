import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const nombre = createSlice({
  name: 'name',
  initialState:initialRadiography,
  reducers: {
    
    setNombre: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setNombre } = nombre.actions
export default nombre.reducer