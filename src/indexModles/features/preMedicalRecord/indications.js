import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const indications = createSlice({
  name: 'indications',
  initialState:initialRadiography,
  reducers: {
    
    setIndications: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setIndications } = indications.actions
export default indications.reducer