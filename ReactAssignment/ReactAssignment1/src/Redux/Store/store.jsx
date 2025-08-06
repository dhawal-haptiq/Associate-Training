import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../../features/Product.Slice";
import cartReducer from "../../features/Card.Slice";
import authReducer from "../../features/auth.Slice";
import wishlistReducer from "../../features/Wishlist.Slice";
export const store=configureStore({
    reducer: {
        products:productReducer,
        cart:cartReducer,
        auth:authReducer,
        wishlist:wishlistReducer,
        
    }
})
