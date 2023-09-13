import { createSlice } from '@reduxjs/toolkit'

let initialValue = {display:'flex',sideBarSize:2, mainframeSize:10}

export const menuController = createSlice({
  name: 'menuController',
  initialState: initialValue,
  reducers: {
    
    openMenu: (state, action) => {
      return {display:'flex',sideBarSize:2, mainframeSize:10}
    },
    closeMenu:(state, action) => {
        return {sideBarSize:0, mainframeSize:12, display:'none'}
    }

  }
})

export const { openMenu, closeMenu } = menuController.actions
export default menuController.reducer