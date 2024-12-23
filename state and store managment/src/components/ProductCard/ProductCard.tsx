import './ProductCard.css'

interface ProductCardProps {
    id: number;
    name: string;
    isFavorite: boolean;
}

const cardWasClicked = () => { }

const ProductCard: React.FC<ProductCardProps> = ({ id, name, isFavorite }) => {
    return (
        <div onClick={cardWasClicked}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{isFavorite}</div>
        </div>
    )
}

export default ProductCard
