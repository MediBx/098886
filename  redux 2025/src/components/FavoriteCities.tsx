// src/components/FavoriteCities.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { City } from '../types';
import CityCard from './CityCard';

const FavoriteCities: React.FC = () => {
    const cities = useSelector((state: RootState) =>
        state.cities.cities.filter(product => product.isFavorite)
    );

    return (
        <div>
            {cities.length === 0 ? (
                <div>No favorite cities</div>
            ) : (
                cities.map((city: City) => <CityCard key={city.id} {...city} />)
            )}
        </div>
    );
};

export default FavoriteCities;