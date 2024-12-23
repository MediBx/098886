import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Product {
    id: number;
    name: string;
    isFavorite: boolean;
}

interface ProductsState {
    products: Product[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductsState = {
    products: [],
    status: 'idle',
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch('http://localhost:5000/products');
        return response.json();
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const product = state.products.find(p => p.id === action.payload);
            if (product) {
                product.isFavorite = !product.isFavorite;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'idle';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { toggleFavorite } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;