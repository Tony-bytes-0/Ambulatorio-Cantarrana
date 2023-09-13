import { createSlice } from '@reduxjs/toolkit'

let initialValue = {"usuario": "admin", "clave": "admin"}

export const loginController = createSlice({
  name: 'loginController',
  initialState: initialValue,
  reducers: {
    
  newLoggin: (state, action) => {
    return state = action.payload
  },

  disconect:  (state, action) => {
    return state = { "usuario":false, "clave":false }
  },

  }
})

export const { newLoggin, disconect } = loginController.actions
export default loginController.reducer