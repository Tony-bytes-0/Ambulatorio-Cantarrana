import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const observations = createSlice({
  name: 'observations',
  initialState:initialRadiography,
  reducers: {
    
    setObservations: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setObservations } = observations.actions
export default observations.reducer