import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
const CakeSlice = () => {

  const initialState = {
    numOfCakes: 10
  }
  const CakeSlice = createSlice({
    name: cake,
    initialState,
    reducers: {
      ordered: (state) => {
        state.numOfCakes--
      },
      restocked: (state, action) => {
        state.numOfCakes = state.numOfCakes + action.payload
      }
    }
  })
}
export const { ordered, restocked } = CakeSlice.actions
export default CakeSlice.reducer
