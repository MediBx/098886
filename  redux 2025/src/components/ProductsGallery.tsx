import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/productsSlice';
import ProductCard from './ProductCard';
import { RootState, AppDispatch } from '../store/store';
import { Product } from '../types';

const ProductsGallery: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    // const dispatch = useDispatch(); 
    const { products, status } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (status === 'loading') {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div>
            {products.map((product: Product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductsGallery;
