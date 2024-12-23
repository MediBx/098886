// App.tsx
import './App.css';
import { Provider } from 'react-redux';  // Import Provider from react-redux
import ProductsGallery from './components/ProductsGallery';
import { store } from './store/store';
import FavoriteProducts from './components/FavoriteProducts';
import CitiesGallery from './components/CitiesGallery';
import FavoriteCities from './components/FavoriteCities';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Provider store={store}>  {/* We need to wrap our components inside the Provider */}
      <div className="App">
        <h1>Hello World</h1>
        <div style={{ display: "flex", justifyContent: "center", width: "70%", margin: "auto" }}>
          <ProductsGallery />
          <hr />
          <FavoriteProducts />
          <hr />
          <hr />
          <CitiesGallery />
          <hr />
          <FavoriteCities />
          <hr />
          <hr />
          <ShoppingCart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
