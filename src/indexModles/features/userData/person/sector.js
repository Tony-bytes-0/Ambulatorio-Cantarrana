import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const sector = createSlice({
  name: 'sector',
  initialState:initialRadiography,
  reducers: {
    
    setSector: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setSector } = sector.actions
export default sector.reducer