import { createSlice } from '@reduxjs/toolkit'

let initialValue = [
    {"usuario":"tony", "clave":"g"},
    {"usuario":"admin", "clave":"admin"},
    {"usuario":"admin", "clave":"1234"}
]

export const localUsers = createSlice({
  name: 'name',
  initialState: initialValue,
  reducers: {
    
    add: (state, action) => {
      state.push(action.payload)//agregar el valor a la lista
    },

    remove: (state, action) => {
      const found = state.find( localUsers =>  localUsers === action.payload)
      if (found){//si conseguiste el NOMBRE en la lista, eleminar uno de ellos usando splice *
        state.splice(state.indexOf(found), 1)
      }
    },

  }
})

export const { add, remove } = localUsers.actions
export default localUsers.reducer