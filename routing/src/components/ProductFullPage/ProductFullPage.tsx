import React from 'react'
import { useParams } from 'react-router-dom';

const ProductFullPage = () => {
    const params = useParams();
    const productId = params.id;

    return (
        <div>
            {+(productId!) === 4 && <p>this is number 4</p>}
            product {productId}
        </div>
    )
}

export default ProductFullPage
