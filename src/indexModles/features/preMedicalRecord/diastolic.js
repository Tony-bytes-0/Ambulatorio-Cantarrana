import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = []

export const diastolic = createSlice({
  name: 'diastolic',
  initialState:initialRadiography,
  reducers: {
    
    setDiastolic: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setDiastolic } = diastolic.actions
export default diastolic.reducer