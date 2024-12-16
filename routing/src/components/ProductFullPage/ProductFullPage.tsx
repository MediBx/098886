import React from 'react'
import { useParams } from 'react-router-dom';

const ProductFullPage = () => {
    const params = useParams();
    const productId = params.id;

    return (
        <div>
            product {productId}
        </div>
    )
}

export default ProductFullPage
