import { createSlice } from '@reduxjs/toolkit'

const exampleObjects = []

export const userList = createSlice({
    name: 'userList',
    initialState:exampleObjects,
    reducers: {
        updateUsers: (state, action) => {
            return state = action.payload
        }
    }
})

export const { updateUsers } = userList.actions
export default userList.reducer