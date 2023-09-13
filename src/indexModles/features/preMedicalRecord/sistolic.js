import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = []

export const sistolic = createSlice({
  name: 'sistolic',
  initialState:initialRadiography,
  reducers: {
    
    setSistolic: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setSistolic } = sistolic.actions
export default sistolic.reducer