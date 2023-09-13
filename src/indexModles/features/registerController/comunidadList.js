import { createSlice } from '@reduxjs/toolkit'

const initialState = []


export const comunidadList = createSlice({
    name: 'comunidadList',
    initialState: initialState,
    reducers: {

        setComunidadList: (state, action) => {
            return action.payload
        }
    }
})

export const { setComunidadList } = comunidadList.actions
export default comunidadList.reducer