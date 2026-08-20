export const Home = () => {
    return (
        <div className="bg-blue-950 m-auto w-3/5 font-bold text-yellow-100">
            <h4 className="text-red-200">Home</h4>
            <NavBar/>
            <UserTable/>
            <Footer/>
        </div>
    )
}

const NavBar = () => {
    return <div>Navbar</div>
}

const UserTable = () => {
    return <div>Users Table</div>
}

const Footer = () => {
    return <div>Footer</div>
}

