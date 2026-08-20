import airbudsImage from "../../assets/AirbudSignatureS680-Image-4_4_copy.webp";
import gameConsoleImage from "../../assets/PS5_Pr-Plus_1.webp";
import laptopImage from "../../assets/czone-20260718123615-87161-0-180726123616838.webp";
import mobilePhone from '../../assets/pixel-7-pro.webp'
import headphonesImage from '../../assets/Ldnio-H01-Black.webp'

export const ProductsComp = () => {
    const products = [
        { id: 1, name: 'Mobile Phone', price: 60000, inStock: true, image: mobilePhone },
        { id: 2, name: 'Video Game Console', price: 40000, inStock: true, image: gameConsoleImage },
        { id: 3, name: 'Laptop', price: 80000, inStock: true, image: laptopImage },
        { id: 4, name: 'Headphones', price: 6000, inStock: true, image: headphonesImage },
        { id: 5, name: 'Air Buds', price: 50000, inStock: true, image: airbudsImage },
        { id: 6, name: "Pixel 7 Pro - Black", price: 62000, inStock: true, image: mobilePhone },
        { id: 7, name: "PS5 Plus Edition", price: 45000, inStock: true, image: gameConsoleImage },
        { id: 8, name: "Gaming Laptop", price: 125000, inStock: true, image: laptopImage },
        { id: 9, name: "Wireless Headphones", price: 7500, inStock: true, image: headphonesImage },
        { id: 10, name: "AirBuds Pro", price: 55000, inStock: false, image: airbudsImage },
        { id: 11, name: "Pixel 7 Pro 128GB", price: 65000, inStock: true, image: mobilePhone },
        { id: 12, name: "PlayStation 5", price: 145000, inStock: true, image: gameConsoleImage },
        { id: 13, name: "Core i7 Laptop", price: 180000, inStock: false, image: laptopImage },
        { id: 14, name: "Ldnio Wireless Headset", price: 8500, inStock: true, image: headphonesImage },
        { id: 15, name: "AirBuds Signature", price: 48000, inStock: true, image: airbudsImage },
        { id: 16, name: "Google Pixel Smartphone", price: 70000, inStock: true, image: mobilePhone },
        { id: 17, name: "PS5 Gaming Console", price: 150000, inStock: false, image: gameConsoleImage },
        { id: 18, name: "Performance Laptop", price: 220000, inStock: true, image: laptopImage },
        { id: 19, name: "Premium Headphones", price: 10000, inStock: true, image: headphonesImage },
        { id: 20, name: "AirBuds S680", price: 52000, inStock: true, image: airbudsImage }
    ]
    return (
        <div className="bg-gray-100 p-8 flex flex-col gap-5">
            <h2 className="font-bold text-black text-xl">Products</h2>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product =>
                    <ProductCard key={product.id} product={product} />
                )}
            </div>
        </div>
    )
}

export const ProductCard = ({ product }) => {
    return (
        <div className="border-gray-100 w-64 rounded-lg border bg-white flex flex-col gap-1 p-4 shadow-md hover:border-gray-200 hover:shadow-lg transition-all">
            <img src={product.image} alt={product.name} />
            <h2 className="font-bold">{product.name}</h2>
            <p className="font-semibold">Price: Rs. {product.price}</p>
            <div className="flex justify-between items-center">
                <p className="text-gray-700">{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
                <button className="py-1 px-3 bg-orange-600 rounded-lg text-white text-sm shadow-md hover:shadow-lg hover:scale-103 transition-all">Add to Cart</button>
            </div>
        </div>
    )
}