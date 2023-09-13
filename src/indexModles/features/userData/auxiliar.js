import { createSlice } from '@reduxjs/toolkit'

const initialState = { especiality:'ninguna especialidad' }

export const aux = createSlice({
    name: 'aux',
    initialState: initialState,
    reducers: {

        setAuxData: (state, action) => {
            return action.payload
        }
    }
})

export const { setAuxData } = aux.actions
export default aux.reducer