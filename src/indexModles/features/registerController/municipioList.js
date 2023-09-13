import { createSlice } from '@reduxjs/toolkit'

const initialState = ['Valentín Valiente', 'Altagracia', 'Santa Inés', 'San Juan', 'Ayacucho', 'Gran Mariscal', 'Raúl Leoni']


export const municipioList = createSlice({
    name: 'municipioList',
    initialState: initialState,
    reducers: {

        setMunicipioList: (state, action) => {
            return action.payload
        }
    }
})

export const { setMunicipioList } = municipioList.actions
export default municipioList.reducer