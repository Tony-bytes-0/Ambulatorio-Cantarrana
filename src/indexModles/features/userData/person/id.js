import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = 'newUser'

export const id = createSlice({
  name: 'id',
  initialState:initialRadiography,
  reducers: {
    
    setId: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setId } = id.actions
export default id.reducer