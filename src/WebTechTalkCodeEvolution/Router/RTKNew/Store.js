import React from 'react'
import  {ReduxLogger } from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import reducer from './Cake/CakeSlice'
const Store = () => {
    const logger = ReduxLogger.createLogger()
    const store = configureStore({
        reducer : {
            cake : reducer,
        },
        middleware : (getDefaultMiddleware) =>getDefaultMiddleware().concat(logger)
    })
}

export default Store
