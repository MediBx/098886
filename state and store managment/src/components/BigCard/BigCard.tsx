import { Product } from '../../types'
import './BigCard.css'

interface BigCardProps {
    product: Product
}


const BigCard: React.FC<BigCardProps> = ({ product }) => {
    return (
        <div>
            <div>{product.id}</div>
            <div>{product.name}</div>
            <div>{product.isFavorite ? "Favorite" : "NOT Favorite"}</div>
        </div>
    )
}

export default BigCard
