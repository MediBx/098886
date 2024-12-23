import { Product } from '../../types';
import './ProductCard.css'

interface ProductCardProps {
    id: number;
    name: string;
    isFavorite: boolean;
    setClickedProduct: React.Dispatch<React.SetStateAction<Product | undefined>>
}


const ProductCard: React.FC<ProductCardProps> = ({ id, name, isFavorite, setClickedProduct }) => {

    const cardWasClicked = () => { setClickedProduct({ id, name, isFavorite }) }

    return (
        <div onClick={cardWasClicked}>
            <div>{id}</div>
            <div>{name}</div>
        </div>
    )
}

export default ProductCard
