// src/components/CitiesGallery.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import CityCard from './CityCard';
import { fetchCities } from '../features/citiesSlice';
import { City } from '../types';

const CitiesGallery: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    // const dispatch = useDispatch(); 
    const { cities, status } = useSelector((state: RootState) => state.cities);

    useEffect(() => {
        dispatch(fetchCities());
    }, [dispatch]);

    if (status === 'loading') {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div>
            {cities.map((city: City) => (
                <CityCard key={city.id} {...city} />
            ))}
        </div>
    );
};

export default CitiesGallery;
