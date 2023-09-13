import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const medic = createSlice({
    name: 'medic',
    initialState: initialState,
    reducers: {

        setMedicData: (state, action) => {
            return action.payload
        }
    }
})

export const { setMedicData } = medic.actions
export default medic.reducer