import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Product } from './types';
import ProductsGallery from './components/ProductsGallery/ProductsGallery';
import BigCard from './components/BigCard/BigCard';

function App() {
  const [clickedProduct, setClickedProduct] = useState<Product>();

  return (
    <div className="App">
      <div className='container'>
        <ProductsGallery setClickedProduct={setClickedProduct} />
        <BigCard clickedProduct={clickedProduct} />
      </div>
    </div>
  );
}

export default App;
