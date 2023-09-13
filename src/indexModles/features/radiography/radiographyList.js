import { createSlice } from '@reduxjs/toolkit'

let radiographyStatic = []
//['Radiografía del cráneo','Radiografía abdominal','Radiografía de la pelvis', 'Radiografía del cuello', 
//'Radiografía de la mano','Radiografía de tórax', 'Ecografía pélvica', 'Ecografía de partes blandas','Ecografía vascular']

export const radiographyList = createSlice({
  name: 'radiographyList',
  initialState: radiographyStatic,
  reducers: {
    addRadiography: (state, action) => {
      state.push(action.payload)//agregar el valor a la lista
    },
    removeRadiography: (state, action) => {
      const found = state.find( symptom =>  symptom === action.payload)
      if (found){//si conseguiste el id en la lista, eleminar uno de ellos usando splice *
        state.splice(state.indexOf(found), 1)
      }
    },
    setRadiographyList: (state, action) => {
        return action.payload
    }
  }
})

export const { addRadiography, removeRadiography, setRadiographyList} = radiographyList.actions
export default radiographyList.reducer