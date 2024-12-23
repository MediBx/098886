import { useEffect, useState } from "react";
import "./ProductsGallery.css"
import { Product } from '../../types';

const ProductsGallery = () => {
    const url = "http://127.0.0.1/products";
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
            {arrOfProducts && arrOfProducts?.map((curr) => {
                return (
                    <div></div>
                )
            })}
        </div>
    )
}

export default ProductsGallery
