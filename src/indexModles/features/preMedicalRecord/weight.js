import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = []

export const weight = createSlice({
  name: 'weight',
  initialState:initialRadiography,
  reducers: {
    
    setWeight: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setWeight } = weight.actions
export default weight.reducer