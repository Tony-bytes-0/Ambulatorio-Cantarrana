import { createSlice } from '@reduxjs/toolkit'

const initialState = ['Valentín Valiente', 'Altagracia', 'Santa Inés', 'San Juan', 'Ayacucho', 'Gran Mariscal', 'Raúl Leoni']


export const parroquiaList = createSlice({
    name: 'parroquiaList',
    initialState: initialState,
    reducers: {

        setParroquiaList: (state, action) => {
            return action.payload
        }
    }
})

export const { setParroquiaList } = parroquiaList.actions
export default parroquiaList.reducer