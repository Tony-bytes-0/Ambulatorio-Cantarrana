import { createSlice } from '@reduxjs/toolkit'

const initialState = []
//'Valentín Valiente', 'Altagracia', 'Santa Inés', 'San Juan', 'Ayacucho', 'Gran Mariscal', 'Raúl Leoni'

export const sectorList = createSlice({
    name: 'sectorList',
    initialState: initialState,
    reducers: {

        setSectorList: (state, action) => {
            return action.payload
        }
    }
})

export const { setSectorList } = sectorList.actions
export default sectorList.reducer