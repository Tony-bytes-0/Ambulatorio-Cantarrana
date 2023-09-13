import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filterUserActive: false, userDataActive: true, selectedUserActive: false
}

export const registerController = createSlice({
    name: 'registerController',
    initialState: initialState,
    reducers: {
    
        togglefilterUser: (state, action) => {
            return {
                filterUserActive: action.payload,
                userDataActive: state.userDataActive,
                selectedUserActive: state.selectedUserActive
            }
        },

        toggleUserData: (state, action) => {
            return {
                filterUserActive: state.filterUserActive,
                userDataActive: action.payload,
                selectedUserActive: state.selectedUserActive
            }
        },

        toggleSelectedUser:(state, action) => {
            return {
                filterUserActive: state.filterUserActive,
                userDataActive: state.userDataActive,
                selectedUserActive: action.payload
            }
        }
      
    }
})

export const { togglefilterUser, toggleUserData, toggleSelectedUser } = registerController.actions
export default registerController.reducer
