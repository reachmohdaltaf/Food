import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../components/Features/cartSlice'

const Store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})
   

export default Store