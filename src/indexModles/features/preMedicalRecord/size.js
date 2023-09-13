import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = []

export const size = createSlice({
  name: 'size',
  initialState:initialRadiography,
  reducers: {
    
    setSize: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setSize } = size.actions
export default size.reducer