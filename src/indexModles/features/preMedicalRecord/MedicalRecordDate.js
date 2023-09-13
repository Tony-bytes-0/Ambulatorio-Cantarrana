import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = []

export const medicalRecordDate = createSlice({
  name: 'medicalRecordDate',
  initialState:initialRadiography,
  reducers: {
    
    setMedicalRecordDate: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setMedicalRecordDate } = medicalRecordDate.actions
export default medicalRecordDate.reducer