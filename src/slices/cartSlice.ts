import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartState {
    cartItems: CartItem[];
    totalAmount: number;
    totalQuantity: number;
}

const initialState: CartState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...newItem, quantity: 1 });
            }
        },
    },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;  // <-- This line exports the reducer as default
