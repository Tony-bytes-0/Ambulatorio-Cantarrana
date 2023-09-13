import { createSlice } from '@reduxjs/toolkit'

let staticData = {
  medic:['medico internista','medico general'], aux:['Enfermera','Enfermera de laboratorio'], 
}
//medicEspecialityList:[], nurseEspecialityList:[], auxEspecialityList:[], 

export const especialityList = createSlice({
  name: 'especialityList',
  initialState: staticData,
  reducers: {
    
    setMedicEspeciality: (state, action) => {
      return { medic: action.payload, aux: state.auxEspecialityList }
    },

    setAuxEspeciality: (state, action) => {
      return { medic: state.medicEspecialityList, aux: action.payload }
    },

  }
})

export const { setMedicEspeciality, setAuxEspeciality} = especialityList.actions
export default especialityList.reducer