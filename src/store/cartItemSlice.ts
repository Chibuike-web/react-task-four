import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItemType } from "../lib/types";

type CartItemState = {
	items: CartItemType[];
};

const initialState: CartItemState = {
	items: [],
};

const cartItemSlice = createSlice({
	name: "cartItem",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<CartItemType>) => {
			const exists = state.items.some((item) => item.id === action.payload.id);
			if (exists) return;
			state.items.push(action.payload);
		},
		removeFromCart: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
		increaseItemQuantity: (state, action: PayloadAction<string>) => {
			state.items = state.items.map((item) =>
				item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
			);
		},
		decreaseItemQuantity: (state, action: PayloadAction<string>) => {
			state.items = state.items.map((item) =>
				item.id === action.payload
					? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
					: item
			);
		},

		clearCart: (state) => {
			state.items = [];
		},
	},
});

export const { addToCart, removeFromCart, increaseItemQuantity, decreaseItemQuantity, clearCart } =
	cartItemSlice.actions;
export default cartItemSlice.reducer;
