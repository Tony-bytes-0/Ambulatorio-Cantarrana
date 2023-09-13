import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = []

export const temp = createSlice({
  name: 'temp',
  initialState:initialRadiography,
  reducers: {
    
    setTemp: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setTemp } = temp.actions
export default temp.reducer