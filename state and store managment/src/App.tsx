import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Product } from './types';

function App() {
  const [clickedProduct, setClickedProduct] = useState<Product>();

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
