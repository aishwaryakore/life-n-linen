import { useContext } from 'react'
import './checkout-item.styles.scss'
import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({cartItem}) => {
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)
    const {name, imageUrl, price, quantity} = cartItem

    const clearItemHandler = () => clearItemFromCart(cartItem)
    const addItemToCartHandler = () => addItemToCart(cartItem)
    const removeItemFromCartHandler = () => removeItemFromCart(cartItem)

    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className='arrow'  onClick={removeItemFromCartHandler}>
                    &#10094;
                </div>
                <span>{quantity}</span>
                <div className='arrow' onClick={addItemToCartHandler}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;