import { createSlice } from '@reduxjs/toolkit'

let labTestStatic = []
//['Análisis de orina.','Analisis de eces','Análisis de cálculos renales','Cultivo de esputo','Hemostasia ','Trombosis ','Determinación de hemoglobina']

export const coprouro = createSlice({
  name: 'coprouro',
  initialState: labTestStatic,
  reducers: {
    
    addCoprouro: (state, action) => {
      state.push(action.payload)//agregar el valor a la lista
    },

    removeCoprouro: (state, action) => {
      const found = state.find( labTest =>  labTest.nombre === action.payload)
      if (found){//si conseguiste el NOMBRE en la lista, eleminar uno de ellos usando splice *
        state.splice(state.indexOf(found), 1)
      }
    },

    setCoprouro:(state, action) => {
      return action.payload
    }
  }
})

export const { addCoprouro, removeCoprouro, setCoprouro} = coprouro.actions
export default coprouro.reducer