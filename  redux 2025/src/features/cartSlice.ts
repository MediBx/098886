import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        { id: 1, name: 'Laptop', price: 999, quantity: 1 },
        { id: 2, name: 'Phone', price: 799, quantity: 1 },
        { id: 3, name: 'Headphones', price: 199, quantity: 2 },
    ],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Add product to cart
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        // Update product quantity in the cart
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find((item) => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },
        // Remove item from cart
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addItem, updateQuantity, removeItem } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;