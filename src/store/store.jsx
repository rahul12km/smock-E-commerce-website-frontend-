import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Slices/CartSlice";
import WishlistReducer from "../Slices/WishSlice";
import ProductReducer from "../Slices/ProductSlice";
const store = configureStore({
  reducer: {
    cart: CartReducer,
    wishlist: WishlistReducer,
    product: ProductReducer,
  },
});

export default store;
