import { Product } from '../../types'
import './BigCard.css'

interface BigCardProps {
    clickedProduct: Product | undefined
}


const BigCard: React.FC<BigCardProps> = ({ clickedProduct }) => {
    return (
        <div>
            {clickedProduct &&
                <>
                    <div>{clickedProduct.id}</div>
                    <div>{clickedProduct.name}</div>
                    <div>{clickedProduct.isFavorite ? "Favorite" : "NOT Favorite"}</div>
                </>
            }
        </div>
    )
}

export default BigCard
