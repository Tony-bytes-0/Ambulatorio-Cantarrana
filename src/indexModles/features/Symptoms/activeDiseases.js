import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid}  from 'uuid'

const exampleObjects = [
  // {id: "01", body: "fiebreEstatica"},
  // {id: "02", body: "tosEstatica"},
]

export const activeDiseases = createSlice({
  name: 'activeDiseases',
  initialState:exampleObjects,
  reducers: {
    addActiveDiseases: (state, action) => {
      state.push({id:uuid(), nombre: action.payload})
    },

    removeActiveDiseases: (state, action) => {
      const found = state.find( Diseases =>  Diseases.nombre === action.payload.nombre)
      if (found){//si conseguiste el id en la lista, eleminar uno de ellos usando splice *
        state.splice(state.indexOf(found), 1)
      }
      
    },
    setActiveDiseases:(state, action) => {
      return []
    }
  }
})

export const { addActiveDiseases, removeActiveDiseases, setActiveDiseases } = activeDiseases.actions
export default activeDiseases.reducer