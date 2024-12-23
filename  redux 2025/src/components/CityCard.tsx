// src/components/CityCard.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../features/citiesSlice';

interface CityCardProps {
    id: number;
    name: string;
    isFavorite: boolean;
}

const CityCard: React.FC<CityCardProps> = ({ id, name, isFavorite }) => {
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

export default CityCard;