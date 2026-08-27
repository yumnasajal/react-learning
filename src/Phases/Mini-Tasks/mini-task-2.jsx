import { memo } from "react";
import { useCart } from "./mini-task-6";
import { useProducts } from "./mini-task-7";

export const ProductsComp = () => {
    // console.log('products component rendered')
    const { filteredProducts } = useProducts();
    return (
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredProducts.map(product =>
                    <ProductCard key={product.id} product={product} />
                )}
            </div>
    )
}

const ProductCard = memo(({product}) => {
    const { add_item } = useCart();
    return (
        <div className="border-gray-100 w-64 rounded-lg border bg-white flex flex-col gap-1 p-4 shadow-md hover:border-gray-200 hover:shadow-lg transition-all">
            <img src={product.image} alt={product.name} />
            <h2 className="font-bold">{product.name}</h2>
            <p className="font-semibold">Price: Rs. {product.price}</p>
            <div className="flex justify-between items-center">
                <p className="text-gray-700">{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
                {product.inStock && (
                    <button onClick={() => add_item(product)} className="py-1 px-3 bg-orange-600 rounded-lg text-white text-sm shadow-md hover:shadow-lg hover:scale-103 transition-all">Add to Cart</button>
                )}
            </div>
        </div>
    )
})