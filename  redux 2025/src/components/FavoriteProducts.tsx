import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ProductCard from './ProductCard';
import { Product } from '../types';

const FavoriteProducts: React.FC = () => {
    const products = useSelector((state: RootState) =>
        state.products.products.filter(product => product.isFavorite)
    );

    return (
        <div>
            {products.length === 0 ? (
                <div>No favorite products</div>
            ) : (
                products.map((product: Product) => <ProductCard key={product.id} {...product} />)
            )}
        </div>
    );
};

export default FavoriteProducts;