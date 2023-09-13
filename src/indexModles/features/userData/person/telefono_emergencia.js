import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const telefono_emergencia = createSlice({
  name: 'telefono_emergencia',
  initialState:initialRadiography,
  reducers: {
    
    setTelefono_emergencia: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setTelefono_emergencia } = telefono_emergencia.actions
export default telefono_emergencia.reducer