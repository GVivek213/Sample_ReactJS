import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../Features/Cake/cakeSlice'
import icecreamReducer from '../Features/Icecream/Icecream'
import userReducer from '../Features/Users/UserSlice'

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer

    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store