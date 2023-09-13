import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid}  from 'uuid'

const initialRadiography = []

export const activeRadiography = createSlice({
  name: 'activeRadiography',
  initialState:initialRadiography,
  reducers: {
    
    addActiveRadiography: (state, action) => {
      state.push({id:uuid(), body: action.payload})
    },

    removeActiveRadiography: (state, action) => {
      const found = state.find( radiography =>  radiography.body === action.payload.body)
      if (found){//si conseguiste el id en la lista, eleminar uno de ellos usando splice *
        state.splice(state.indexOf(found), 1)
      }
      
    },
    normalizeActiveRadiography: (state, action) => {
      return []
    }
  }
})

export const { addActiveRadiography, removeActiveRadiography, normalizeActiveRadiography } = activeRadiography.actions
export default activeRadiography.reducer
