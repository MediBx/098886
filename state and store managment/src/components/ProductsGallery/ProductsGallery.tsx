import { useEffect, useState } from "react";
import "./ProductsGallery.css"
import { Product } from '../../types';
import ProductCard from "../ProductCard/ProductCard";

const ProductsGallery = () => {
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
                    <ProductCard id={id} name={name} isFavorite={isFavorite} />
                )
            })}
        </div>
    )
}

export default ProductsGallery
