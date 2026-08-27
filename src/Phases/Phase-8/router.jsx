import { createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation, useParams, Outlet, Navigate, useNavigate } from "react-router-dom";

const AuthContext = createContext(null);
const useAuth = () => {
    return useContext(AuthContext);
}
const Home = () => {
    const location = useLocation();
    console.log('Current location:', location)
    return <h1>Home Page</h1>
}
const Products = () => {
    const products = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Mobile Phone" },
        { id: 3, name: "Headphones" }
    ]
    return (
        <div>
            <h1>Products Page</h1>
            <p>Select a product:</p>

            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            {product.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    )
}
const ProductsDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <p>Product Details:</p>
            <h1>
                Product ID: {id}
            </h1>
        </div>
    )
}

const Cart = () => {
    return <h1>Cart Page</h1>
}
const About = () => {
    return <h1>About page</h1>
}
export const RouterPractice = () => {
    const { isLoggedIn, logout } = useAuth();
    return (
        <BrowserRouter>
            <nav>
                {!isLoggedIn && (
                    <Link to="/login">Login</Link>
                )}
                {isLoggedIn && (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/cart">Cart</Link>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'font-bold text-orange-600 underline' : ''}>About</NavLink>
                        <button onClick={logout} className="text-red-600 text-shadow-red-600">Logout</button>
                    </>
                )}
            </nav>
            <Routes>
                <Route element={<ProtectedPage/>}>
                    
                    <Route element={<Layout />}>

                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />}>
                            <Route path=":id" element={<ProductsDetails />} />
                        </Route>
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/about" element={<About />} />

                    </Route>
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
const Login = () => {
    const { isLoggedIn, login } = useAuth();
    const navigate = useNavigate();
    const handleLogin = () => {
        login();
        navigate('/')
    }
    if (isLoggedIn) {
        return <Navigate to='/' replace />
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin} >Login</button>
        </div>
    )
}

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
const Header = () => {
    return (
        <h1>THis is header</h1>
    )
}
const Footer = () => {
    return (
        <h2>THis is footer</h2>
    )
}
const ProtectedPage = ({ children }) => {
    const { isLoggedIn } = useAuth();
    console.log('Protected check: ', isLoggedIn);
    if (!isLoggedIn) {
        return (
            <Navigate to='/login' replace />
        )
    }
    return <Outlet/>;
}
export const AuthPage = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = () => {
        setIsLoggedIn(true);
    }
    const logout = () => {
        setIsLoggedIn(false);
    }
    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}> {children} </AuthContext.Provider>
    )
}