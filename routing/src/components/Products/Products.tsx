import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <div>
            <Link to={'/product-full-page/1'}>{'product 1'}</Link>
            <Link to={'/product-full-page/2'}>{'product 2'}</Link>
            <Link to={'/product-full-page/3'}>{'product 3'}</Link>
        </div>
    )
}

export default Products
