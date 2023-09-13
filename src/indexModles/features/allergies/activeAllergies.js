import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid}  from 'uuid'

const exampleObjects = [
  // {id: "01", body: "fiebreEstatica"},
  // {id: "02", body: "tosEstatica"},
]

export const activeAllergies = createSlice({
  name: 'activeAllergies',
  initialState:exampleObjects,
  reducers: {
    addActiveAllergies: (state, action) => {
      state.push({id:uuid(), tipo: action.payload})
    },

    removeActiveAllergies: (state, action) => {
      const found = state.find( Allergies =>  Allergies.tipo === action.payload.tipo)
      if (found){//si conseguiste el id en la lista, eleminar uno de ellos usando splice *
        state.splice(state.indexOf(found), 1)
      }
      
    },
    setActiveAllergies: (state, action) => {
      return []
    }
  }
})

export const { addActiveAllergies, removeActiveAllergies, setActiveAllergies } = activeAllergies.actions
export default activeAllergies.reducer