import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice";
import cartItemReducer from "./cartItemSlice";

export const store = configureStore({
	reducer: {
		wishlist: wishlistReducer,
		cartItem: cartItemReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
