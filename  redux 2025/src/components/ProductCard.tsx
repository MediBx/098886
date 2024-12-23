import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../features/productsSlice';
import { AppDispatch } from '../store/store';

interface ProductCardProps {
    id: number;
    name: string;
    isFavorite: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, isFavorite }) => {
    //const dispatch = useDispatch<AppDispatch>();
    const dispatch = useDispatch();
    const handleFavoriteToggle = () => {
        dispatch(toggleFavorite(id));
    };

    return (
        <div>
            <h3>{name}</h3>
            <button onClick={handleFavoriteToggle}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </div>
    );
};

export default ProductCard;