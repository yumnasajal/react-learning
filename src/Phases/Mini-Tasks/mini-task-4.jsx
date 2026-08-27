
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./mini-task-6";

export const ShoppingCart = () => {
    const { cartItems, increment, decrement, delete_item } = useCart();
    const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)

    return (
        <div className="p-2 m-2 border border-gray-200 rounded-md shadow-md bg-white">
            <h2 className="m-2 text-xl font-semibold pb-2 border-b border-gray-300">Shopping Cart</h2>
            <div className="flex flex-col gap-2 p-2">
                {cartItems.length > 0 ? (
                    cartItems.map(item => <CartItem key={item.id} item={item} handle_decrement={decrement} handle_increment={increment} handle_delete={delete_item} />)
                ) : (
                    <h3>No items in cart</h3>
                )}

            </div>
            <div className="flex justify-between items-center text-lg py-2 mx-2 font-bold border-t border-gray-300">
                <p className="ms-3">Total Price</p>
                <p className="text-orange-600 me-1">Rs. {totalPrice}</p>
            </div>
        </div>
    )
}
const CartItem = ({ item, handle_decrement, handle_increment, handle_delete }) => {
    // console.log('cart item rendered')
    return (
        <div className="w-full h-32 flex justify-between gap-2 p-1 rounded-md">
            <div className="flex justify-center gap-2">
                <img src={item.image} alt={item.name} className="h-full w-32 rounded-sm" />
                <div className="flex flex-col justify-around items-start">
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-orange-700 text-lg font-semibold">Item Price: Rs. {item.price}</p>
                    <div className="flex gap-0">
                        {item.quantity > 1 ? (
                            <button disabled={item.quantity === 1} onClick={() => handle_decrement(item.id)} className="w-8 p-1">{item.quantity > 1 && (<FontAwesomeIcon icon={faMinus} />)}</button>
                        ) : (
                            <div className="w-8 p-1 bg-gray-100 rounded-md shadow-md"></div>
                        )}
                        <div className="text-center min-w-15 h-8 text-lg flex items-center justify-center bg-gray-50 rounded-sm">{item.quantity}</div>
                        <button onClick={() => handle_increment(item.id)} className="w-8 p-1"><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between items-end">
                <button onClick={() => handle_delete(item.id)} className="text-red-700"><FontAwesomeIcon icon={faTrash} /></button>
                <div className="flex flex-col justify-end gap-2">
                    <p>Quantity: {item.quantity}</p>
                    <h2 className="text-lg font-semibold text-teal-700">Rs. {item.price * item.quantity}</h2>
                </div>
            </div>
        </div>
    )
}