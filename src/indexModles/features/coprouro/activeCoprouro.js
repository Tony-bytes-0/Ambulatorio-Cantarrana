import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid}  from 'uuid'

const exampleObjects = []

export const activeCoprouro = createSlice({
  name: 'activeCoprouro',
  initialState:exampleObjects,
  reducers: {
    
    addActiveCoprouro: (state, action) => {
      state.push({id:uuid(), nombre: action.payload})
    },

    removeActiveCoprouro: (state, action) => {
      const found = state.find( activeCoprouro =>  activeCoprouro.nombre === action.payload.nombre)
      if (found){//si conseguiste el id en la lista, eleminar uno de ellos usando splice *
        state.splice(state.indexOf(found), 1)
      }
      
    },
    normalizeActiveCoprouro: (state, action ) => {
      return []
    }
  }
})

export const { addActiveCoprouro, removeActiveCoprouro, normalizeActiveCoprouro } = activeCoprouro.actions
export default activeCoprouro.reducer