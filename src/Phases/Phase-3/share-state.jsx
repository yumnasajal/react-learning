import { use, useState } from "react";

export const ShoppingCart = () => {
    //lift the state up
    const [cartItems, setCartItems] = useState({
        reactCourse: 0,
        vueCourse: 0
    })

    const prices = {
        reactCourse: 49.99,
        vueCourse: 39.99
    }
    const handle_course = (course) => {
        if(cartItems[course] >= 3) {
            
            return
        } ;
        setCartItems((prevCartItems) => ({
            ...prevCartItems,
            [course]: prevCartItems[course] + 1,
        }))
    }
    const clear_cart = () => {
        setCartItems({
            reactCourse: 0,
            vueCourse: 0
        })
    }
    return (
        <>
            <ProductCard name='React Course' price={prices.reactCourse} quantity={cartItems.reactCourse} onAddToCart={() => {handle_course('reactCourse')}}/>
            <ProductCard name='Vue Course' price={prices.vueCourse} quantity={cartItems.vueCourse} onAddToCart={() => {handle_course('vueCourse')}}/>

            <CartSumm cartItems={cartItems} prices={prices} />
            <button onClick={clear_cart}>Clear Cart</button>
        </>

    )
}
export const ProductCard = ({ name, price, quantity, onAddToCart }) => {
    return (
        <div>
            <h4>{name}</h4>
            <p>${price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={onAddToCart}>Add to cart</button>
        </div>
    )
}

export const CartSumm = ({cartItems, prices}) => {
    const total_items = cartItems.reactCourse + cartItems.vueCourse;
    const total_price = (cartItems.reactCourse * prices.reactCourse) + (cartItems.vueCourse * prices.vueCourse);
    return (
        <div>
            <h3>Cart Summary</h3>
            <p>Total items: {total_items}</p>
            <p>Total price: ${total_price.toFixed(2)} </p>
        </div>
    )
}