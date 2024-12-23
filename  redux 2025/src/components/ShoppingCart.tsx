import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { removeItem, updateQuantity } from '../features/cartSlice';



const ShoppingCart = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch<AppDispatch>();

    // change how many items of the products in we want to have in the cart
    const handleQuantityChange = (id: number, newQuantity: number) => {
        if (newQuantity <= 0) {
            return; // Prevent setting quantity to 0 or negative
        }
        dispatch(updateQuantity({ id, quantity: newQuantity }));
    };

    // Function to handle item removal
    const handleRemoveItem = (id: number) => {
        dispatch(removeItem(id));
    };

    // Calculate the total price of all items in the cart
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div>
            <h2>Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <div>
                                    <span>{item.name}</span> - ${item.price} each
                                </div>
                                <div>
                                    Quantity:
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                                        min="1"
                                    />
                                </div>
                                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>

                    <div>
                        <h3>Total Price: ${getTotalPrice()}</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;