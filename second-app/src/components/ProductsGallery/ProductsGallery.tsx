import ProductCard from '../ProductCard/ProductCard'
import './ProductsGallery.css'

const ProductsGallery = () => {
    return (
        <div className="products-gallery">
            <ProductCard productName="Smartphone X"
                productDescription="Latest model with all the best features."
                price="$999.99" />


            <ProductCard productName="Sony Headphones"
                productDescription="Noise cancelling headphones with amazing sound."
                price="$300.99" />


            <ProductCard productName="Acer Laptop"
                productDescription="Newest model with all the best features." />


            <ProductCard productName="Smartphone X"
                productDescription="Latest model with all the best features."
                price="$999.99" />


            <ProductCard productName="Sony Headphones"
                productDescription="Noise cancelling headphones with amazing sound."
                price="$300.99" />


            <ProductCard productName="Acer Laptop"
                productDescription="Newest model with all the best features." />
        </div>
    )
}

export default ProductsGallery
