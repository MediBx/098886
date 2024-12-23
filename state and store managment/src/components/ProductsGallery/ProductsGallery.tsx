import { SetStateAction, useEffect, useState } from "react";
import "./ProductsGallery.css"
import { Product } from '../../types';
import ProductCard from "../ProductCard/ProductCard";

interface ProductsGalleryProps {
    setClickedProduct: React.Dispatch<React.SetStateAction<Product | undefined>>
}

const ProductsGallery: React.FC<ProductsGalleryProps> = ({ setClickedProduct }) => {
    const url = "http://127.0.0.1:5000/products";
    const [arrOfProducts, setArrOfProducts] = useState<Product[]>();

    useEffect(() => {
        fetch(url)
            .then((dataFromAPI) => { return dataFromAPI.json() })
            .then((dataAsObj) => { setArrOfProducts(dataAsObj) })
            .catch((err) => {
                console.log("err while fetching products in gallery", err);
            })
    }, []);

    return (
        <div>
            {arrOfProducts && arrOfProducts?.map(({ id, name, isFavorite }) => {
                return (
                    <ProductCard id={id} name={name} setClickedProduct={setClickedProduct} isFavorite={isFavorite} />
                )
            })}
        </div>
    )
}

export default ProductsGallery
