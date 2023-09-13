import { createSlice } from '@reduxjs/toolkit'

const initialState = []


export const estadoList = createSlice({
    name: 'estadoList',
    initialState: initialState,
    reducers: {

        setEstadoList: (state, action) => {
            return action.payload
        }
    }
})

export const { setEstadoList } = estadoList.actions
export default estadoList.reducer