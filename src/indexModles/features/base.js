import { createSlice } from '@reduxjs/toolkit'

let initialValue = []

export const theName = createSlice({
  name: 'name',
  initialState: initialValue,
  reducers: {
    
    add: (state, action) => {
      state.push(action.payload)//agregar el valor a la lista
    },

    remove: (state, action) => {
      const found = state.find( theName =>  theName === action.payload)
      if (found){//si conseguiste el NOMBRE en la lista, eleminar uno de ellos usando splice *
        state.splice(state.indexOf(found), 1)
      }
    },

  }
})

export const { add, remove } = theName.actions
export default theName.reducer