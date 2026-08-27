import { createContext, useCallback, useContext, useReducer, useState } from "react";
const CartContext = createContext(null);
export const useCart = () => {
    return useContext(CartContext)
}
function cartReducer(state, action) {
    switch (action.type) {
        case 'add_item':
            {
                const existing_item = state.find(item => item.id === action.product.id);
                if (existing_item) {
                    return state.map(item => item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item)
                }
                return [...state, { ...action.product, quantity: 1 }]
            }
        case 'increment':
            return state.map(item => item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item)
        case 'decrement':
            return state.map(item => item.id === action.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)
        case 'delete':
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}
export const Cart = ({ children }) => {
    return (
        <CartProvider>
            {children}
        </CartProvider>
    )
}

const CartProvider = ({ children }) => {
    const [cartItems, dispatch] = useReducer(cartReducer, []);
    // console.log('cart provider rendered')
    const add_item = useCallback((product) => {
        dispatch({
            type: 'add_item',
            product: product
        })
    }, [])
    const decrement = useCallback((id) => {
        dispatch({
            type: 'decrement',
            id: id
        })
    })
    const increment = useCallback((id) => {
        dispatch({
            type: 'increment',
            id: id
        })
    })
    const delete_item = useCallback((id) => {
        dispatch({
            type: 'delete',
            id: id
        })
    })
    return (
        <CartContext value={{ cartItems, add_item, increment, decrement, delete_item }} >
            {children}
        </CartContext>
    )
}
