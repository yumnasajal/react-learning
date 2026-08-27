import airbudsImage from "../../assets/AirbudSignatureS680-Image-4_4_copy.webp";
import gameConsoleImage from "../../assets/PS5_Pr-Plus_1.webp";
import laptopImage from "../../assets/czone-20260718123615-87161-0-180726123616838.webp";
import mobilePhone from '../../assets/pixel-7-pro.webp'
import headphonesImage from '../../assets/Ldnio-H01-Black.webp'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./mini-task-6";
import { createContext, useContext, useState, useMemo } from "react";

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
    { id: 19, name: "Premium Headphones", price: 10000, inStock: false, image: headphonesImage },
    { id: 20, name: "AirBuds S680", price: 52000, inStock: true, image: airbudsImage }
]

const ProductContext = createContext(null);
export const useProducts = () => useContext(ProductContext)

export const ProductProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [resultsNumber, setResultsNumber] = useState(products.length)
    const filteredProducts = useMemo(() => {
        console.log('Filtering Products...')
        const filtered =  products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
        return filtered.slice(0, resultsNumber);
    }, [search, resultsNumber])
    return (
        <div className="p-2 m-2 border border-gray-200 rounded-md shadow-md bg-white">
            <div className="flex flex-row justify-between p-4">
                <h2 className="font-bold text-black text-xl">Products</h2>
                <div className="flex justify-center items-center gap-3">
                    <SearchItems setSearch={setSearch} setResults={setResultsNumber} results={resultsNumber}/>
                    <CartIcon />
                </div>
            </div>
            <p>Showing {resultsNumber} of {products.length} items</p>
            <ProductContext value={{ filteredProducts }}>
                {children}
            </ProductContext>
        </div>
    )
}

const CartIcon = () => {
    const { cartItems } = useCart();
    const total_items = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
        <div className="relative inline-block">
            <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
            {total_items > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full min-w-5 h-5 flex items-center justify-center">
                    {total_items}
                </span>
            )}
        </div>
    )
}

// useMemo
const SearchItems = ({ setSearch, setResults, results }) => {
    return (
        <>
            <input type="text" value={results} placeholder="Enter number of items to display" onChange={(e) => {
                const value = Number(e.target.value);
                setResults(value<= products.length ? value :products.length)
            }}/>
            <input type="text" placeholder="Search for items.." onChange={(e) => setSearch(e.target.value)} />
        </>
    )
}

