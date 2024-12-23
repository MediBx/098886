import './ProductCard.css'

interface ProductCardProps {
    id: number;
    name: string;
}

const cardWasClicked = () => { }

const ProductCard: React.FC<ProductCardProps> = ({ id, name }) => {
    return (
        <div onClick={cardWasClicked}>
            <div>{id}</div>
            <div>{name}</div>
        </div>
    )
}

export default ProductCard
