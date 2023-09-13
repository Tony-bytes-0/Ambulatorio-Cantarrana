import { createSlice } from '@reduxjs/toolkit'

const initialRadiography = ''

export const recipe = createSlice({
  name: 'recipe',
  initialState:initialRadiography,
  reducers: {
    
    setRecipe: (state, action) => {
      return action.payload
    }
      
    }
})

export const { setRecipe } = recipe.actions
export default recipe.reducer