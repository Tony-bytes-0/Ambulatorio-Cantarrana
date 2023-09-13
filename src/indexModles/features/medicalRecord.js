import { createSlice } from '@reduxjs/toolkit'

let initialValue = []

export const medicalRecord = createSlice({
  name: 'medicalRecord',
  initialState: initialValue,
  reducers: {
    
    setMedicalRecord: (state, action) => {
      return action.payload
    }

  }
})

export const { setMedicalRecord } = medicalRecord.actions
export default medicalRecord.reducer