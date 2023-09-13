import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid}  from 'uuid'

const exampleObjects = []

export const activeEmatology = createSlice({
  name: 'activeEmatology',
  initialState:exampleObjects,
  reducers: {
    
    addActiveEmatology: (state, action) => {
      state.push({id:uuid(), nombre: action.payload})
    },

    removeActiveEmatology: (state, action) => {
      const found = state.find( ematology =>  ematology.nombre === action.payload)
      if (found){//si conseguiste el id en la lista, eleminar uno de ellos usando splice *
        state.splice(state.indexOf(found), 1)
      }
    },
    normalizeActiveEmatology:(estate, action) => {
      return []
    }
  }
})

export const { addActiveEmatology, removeActiveEmatology, normalizeActiveEmatology } = activeEmatology.actions
export default activeEmatology.reducer