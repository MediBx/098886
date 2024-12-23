// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '../features/productsSlice';
import { citiesReducer } from '../features/citiesSlice';
import { cartReducer } from '../features/cartSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cities: citiesReducer,
        cart: cartReducer,
    },
});

// Export the RootState type 
// (the type of the entire state object managed by the store)
export type RootState = ReturnType<typeof store.getState>;
// Export the AppDispatch type 
// (the type of the dispatch function, used to dispatch actions)
export type AppDispatch = typeof store.dispatch;


