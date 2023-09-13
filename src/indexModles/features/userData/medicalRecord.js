import { createSlice } from '@reduxjs/toolkit'

const exampleObjects = []

export const medicalRecord = createSlice({
    name: 'medicalRecord',
    initialState:exampleObjects,
    reducers: {
        setMedicalRecord: (state, action) => {
            return state = action.payload
        }
    }
})

export const { setMedicalRecord } = medicalRecord.actions
export default medicalRecord.reducer