import { createSlice } from '@reduxjs/toolkit'

let symtompsList = []
//['Fiebre','Malestar','Etc','Dolor de Cabeza','Nauseas','Mareos','Tos','Tos Seca','Insomnio']

export const diseases = createSlice({
  name: 'diseases',
  initialState: symtompsList,
  reducers: {
    
    addDisease: (state, action) => {
      state.push(action.payload)//agregar el valor a la lista
    },

    removeDisease: (state, action) => {
      const found = state.find( symptom =>  symptom.nombre === action.payload)
      if (found){//si conseguiste el id en la lista, eleminar uno de ellos usando splice *
        state.splice(state.indexOf(found), 1)
      }
    },

    showList: (state, action) => {
        console.log( state )
    },

    setDisease: (state, action ) => {
      return action.payload
    }
  }
})

export const { addDisease, removeDisease, showList, setDisease} = diseases.actions
export default diseases.reducer